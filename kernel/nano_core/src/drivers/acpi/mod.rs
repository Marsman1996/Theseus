//! Code to parse the ACPI tables, borrowed from Redox. 

use alloc::btree_map::BTreeMap;
use alloc::string::String;
use alloc::vec::Vec;
use alloc::boxed::Box;

// use syscall::io::{Io, Pio};

use spin::RwLock;

// use stop::kstop;

use memory::{ActivePageTable, Page, PhysicalAddress, VirtualAddress, Frame, EntryFlags, FRAME_ALLOCATOR};
use core::ops::DerefMut;

// use self::dmar::Dmar;
use self::fadt::Fadt;
use self::madt::Madt;
use self::rsdt::Rsdt;
use self::sdt::Sdt;
use self::xsdt::Xsdt;
// use self::hpet::Hpet;
use self::rxsdt::Rxsdt;
use self::rsdp::RSDP;

// use self::aml::{parse_aml_table, AmlError, AmlValue};

// pub mod hpet;
// mod dmar;
mod fadt;
mod madt;
mod rsdt;
mod sdt;
mod xsdt;
// mod aml;
mod rxsdt;
mod rsdp;

const TRAMPOLINE: usize = 0x7E00;
const AP_STARTUP: usize = TRAMPOLINE + 512;

fn get_sdt(sdt_address: usize, active_table: &mut ActivePageTable) -> &'static Sdt {
    
    let mut allocator = FRAME_ALLOCATOR.try().unwrap().lock();
    
    {
        let page = Page::containing_address(sdt_address as VirtualAddress); // FIXME: temp using identity mapping
        if let Some(frame) = active_table.translate_page(page) {
            trace!("initial sdt_address {:#x} was already mapped to frame {:#x}!", sdt_address, frame.start_address());
        }
        else {
            let frame = Frame::containing_address(page.start_address() as PhysicalAddress);
            active_table.map_to(page, frame, EntryFlags::PRESENT | EntryFlags::NO_EXECUTE, allocator.deref_mut());
        }
    }

    let sdt = unsafe { &*(sdt_address as *const Sdt) };

    // Map extra SDT frames if required
    {
        let start_page = Page::containing_address(sdt_address as VirtualAddress) + 1; // the next page, we already did the first one
        let end_page = Page::containing_address(sdt_address + (sdt.length as usize));
        for page in Page::range_inclusive(start_page, end_page) {
            if let Some(frame) = active_table.translate_page(page) {
                trace!("extra length sdt_address {:#x} was already mapped!", sdt_address);
            }
            else {
                let frame = Frame::containing_address(page.start_address() as PhysicalAddress);
                active_table.map_to(page, frame, EntryFlags::PRESENT | EntryFlags::NO_EXECUTE, allocator.deref_mut());
            }
        }
    }

    sdt
}

// fn init_aml_table(sdt: &'static Sdt) {
//     match parse_aml_table(sdt) {
//         Ok(_) => debug!(": Parsed"),
//         Err(AmlError::AmlParseError(e)) => error!(": {}", e),
//         Err(AmlError::AmlInvalidOpCode) => error!(": Invalid opcode"),
//         Err(AmlError::AmlValueError) => error!(": Type constraints or value bounds not met"),
//         Err(AmlError::AmlDeferredLoad) => debug!(": Deferred load reached top level"),
//         Err(AmlError::AmlFatalError(_, _, _)) => {
//             error!(": Fatal error occurred");
//             unsafe { kstop(); }
//         },
//         Err(AmlError::AmlHardFatal) => {
//             error!(": Fatal error occurred");
//             unsafe { kstop(); }
//         }
//     }
// }

// fn init_namespace() {
//     {
//         let mut namespace = ACPI_TABLE.namespace.write();
//         *namespace = Some(BTreeMap::new());
//     }

//     let dsdt = find_sdt("DSDT");
//     if dsdt.len() == 1 {
//         debug!("  DSDT");
//         load_table(get_sdt_signature(dsdt[0]));
//         init_aml_table(dsdt[0]);
//     } else {
//         error!("Unable to find DSDT");
//         return;
//     };

//     let ssdts = find_sdt("SSDT");

//     for ssdt in ssdts {
//         debug!("  SSDT");
//         load_table(get_sdt_signature(ssdt));
//         init_aml_table(ssdt);
//     }
// }

/// Parse the ACPI tables to gather CPU, interrupt, and timer information
pub fn init(active_table: &mut ActivePageTable) {
    {
        let mut sdt_ptrs = SDT_POINTERS.write();
        *sdt_ptrs = Some(BTreeMap::new());
    }

    {
        let mut order = SDT_ORDER.write();
        *order = Some(vec!());
    }

    // Search for RSDP
    if let Some(rsdp) = RSDP::get_rsdp(active_table) {
        let rxsdt = get_sdt(rsdp.sdt_address(), active_table);
        debug!("rxsdt: {:?}", rxsdt);

        let rxsdt: Box<Rxsdt + Send + Sync> = if let Some(rsdt) = Rsdt::new(rxsdt) {
            Box::new(rsdt)
        } else if let Some(xsdt) = Xsdt::new(rxsdt) {
            Box::new(xsdt)
        } else {
            error!("UNKNOWN RSDT OR XSDT SIGNATURE");
            return;
        };


        rxsdt.map_all(active_table);

        for sdt_address in rxsdt.iter() {
            let sdt = unsafe { &*(sdt_address as *const Sdt) };

            let signature = get_sdt_signature(sdt);
            if let Some(ref mut ptrs) = *(SDT_POINTERS.write()) {
                ptrs.insert(signature, sdt);
            }
        }

        // Fadt::init(active_table);
        Madt::init(active_table);
        // Dmar::init(active_table);
        // Hpet::init(active_table);
        // init_namespace();
    } else {
        error!("NO RSDP FOUND");
    }
}

// pub fn set_global_s_state(state: u8) {
//     if state == 5 {
//         let fadt = ACPI_TABLE.fadt.read();

//         if let Some(ref fadt) = *fadt {
//             let port = fadt.pm1a_control_block as u16;
//             let mut val = 1 << 13;

//             let namespace = ACPI_TABLE.namespace.read();

//             if let Some(ref namespace) = *namespace {
//                 if let Some(s) = namespace.get("\\_S5") {
//                     if let Ok(p) = s.get_as_package() {
//                         let slp_typa = p[0].get_as_integer().expect("SLP_TYPa is not an integer");
//                         let slp_typb = p[1].get_as_integer().expect("SLP_TYPb is not an integer");

//                         info!("Shutdown SLP_TYPa {:X}, SLP_TYPb {:X}", slp_typa, slp_typb);
//                         val |= slp_typa as u16;

//                         info!("Shutdown with ACPI outw(0x{:X}, 0x{:X})", port, val);
//                         Pio::<u16>::new(port).write(val);
//                     }
//                 }
//             }
//         }
//     }
// }

type SdtSignature = (String, [u8; 6], [u8; 8]);
pub static SDT_POINTERS: RwLock<Option<BTreeMap<SdtSignature, &'static Sdt>>> = RwLock::new(None);
pub static SDT_ORDER: RwLock<Option<Vec<SdtSignature>>> = RwLock::new(None);

pub fn find_sdt(name: &str) -> Vec<&'static Sdt> {
    let mut sdts: Vec<&'static Sdt> = vec!();

    if let Some(ref ptrs) = *(SDT_POINTERS.read()) {
        for (signature, sdt) in ptrs {
            if signature.0 == name {
                sdts.push(sdt);
            }
        }
    }

    sdts
}

pub fn get_sdt_signature(sdt: &'static Sdt) -> SdtSignature {
    let signature = String::from_utf8(sdt.signature.to_vec()).expect("Error converting signature to string");
    (signature, sdt.oem_id, sdt.oem_table_id)
}

pub fn load_table(signature: SdtSignature) {
    let mut order = SDT_ORDER.write();

    if let Some(ref mut o) = *order {
        o.push(signature);
    }
}

pub fn get_signature_from_index(index: usize) -> Option<SdtSignature> {
    if let Some(ref order) = *(SDT_ORDER.read()) {
        if index < order.len() {
            Some(order[index].clone())
        } else {
            None
        }
    } else {
        None
    }
}

pub fn get_index_from_signature(signature: SdtSignature) -> Option<usize> {
    if let Some(ref order) = *(SDT_ORDER.read()) {
        let mut i = order.len();
        while i > 0 {
            i -= 1;

            if order[i] == signature {
                return Some(i);
            }
        }
    }

    None
}

pub struct Acpi {
    pub fadt: RwLock<Option<Fadt>>,
    // pub namespace: RwLock<Option<BTreeMap<String, AmlValue>>>,
    // pub hpet: RwLock<Option<Hpet>>,
    pub next_ctx: RwLock<u64>,
}

pub static ACPI_TABLE: Acpi = Acpi {
    fadt: RwLock::new(None),
    // namespace: RwLock::new(None),
    // hpet: RwLock::new(None),
    next_ctx: RwLock::new(0),
};