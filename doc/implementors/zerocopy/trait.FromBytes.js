(function() {var implementors = {
"apic":[["impl FromBytes for <a class=\"struct\" href=\"apic/struct.ApicRegisters.html\" title=\"struct apic::ApicRegisters\">ApicRegisters</a>"],["impl FromBytes for <a class=\"struct\" href=\"apic/struct.RegisterArray.html\" title=\"struct apic::RegisterArray\">RegisterArray</a>"]],
"context_switch_avx":[["impl FromBytes for <a class=\"struct\" href=\"context_switch_avx/struct.ContextAVX.html\" title=\"struct context_switch_avx::ContextAVX\">ContextAVX</a>"]],
"context_switch_regular":[["impl FromBytes for <a class=\"struct\" href=\"context_switch_regular/struct.ContextRegular.html\" title=\"struct context_switch_regular::ContextRegular\">ContextRegular</a>"]],
"context_switch_sse":[["impl FromBytes for <a class=\"struct\" href=\"context_switch_sse/struct.ContextSSE.html\" title=\"struct context_switch_sse::ContextSSE\">ContextSSE</a>"]],
"dmar":[["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarRhsa.html\" title=\"struct dmar::DmarRhsa\">DmarRhsa</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarSatc.html\" title=\"struct dmar::DmarSatc\">DmarSatc</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarAtsr.html\" title=\"struct dmar::DmarAtsr\">DmarAtsr</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarAndd.html\" title=\"struct dmar::DmarAndd\">DmarAndd</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarRmrr.html\" title=\"struct dmar::DmarRmrr\">DmarRmrr</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DeviceScopePath.html\" title=\"struct dmar::DeviceScopePath\">DeviceScopePath</a>"],["impl FromBytes for <a class=\"struct\" href=\"dmar/struct.DmarEntryRecord.html\" title=\"struct dmar::DmarEntryRecord\">DmarEntryRecord</a>"]],
"fadt":[["impl FromBytes for <a class=\"struct\" href=\"fadt/struct.Fadt.html\" title=\"struct fadt::Fadt\">Fadt</a>"]],
"framebuffer":[["impl FromBytes for <a class=\"struct\" href=\"framebuffer/pixel/struct.AlphaPixel.html\" title=\"struct framebuffer::pixel::AlphaPixel\">AlphaPixel</a>"],["impl FromBytes for <a class=\"struct\" href=\"framebuffer/pixel/struct.RGBPixel.html\" title=\"struct framebuffer::pixel::RGBPixel\">RGBPixel</a>"]],
"hpet":[["impl FromBytes for <a class=\"struct\" href=\"hpet/struct.HpetAcpiTable.html\" title=\"struct hpet::HpetAcpiTable\">HpetAcpiTable</a>"],["impl FromBytes for <a class=\"struct\" href=\"hpet/struct.Hpet.html\" title=\"struct hpet::Hpet\">Hpet</a>"],["impl FromBytes for <a class=\"struct\" href=\"hpet/struct.HpetTimer.html\" title=\"struct hpet::HpetTimer\">HpetTimer</a>"]],
"intel_ethernet":[["impl FromBytes for <a class=\"struct\" href=\"intel_ethernet/descriptors/struct.AdvancedTxDescriptor.html\" title=\"struct intel_ethernet::descriptors::AdvancedTxDescriptor\">AdvancedTxDescriptor</a>"],["impl FromBytes for <a class=\"struct\" href=\"intel_ethernet/descriptors/struct.LegacyRxDescriptor.html\" title=\"struct intel_ethernet::descriptors::LegacyRxDescriptor\">LegacyRxDescriptor</a>"],["impl FromBytes for <a class=\"struct\" href=\"intel_ethernet/descriptors/struct.AdvancedRxDescriptor.html\" title=\"struct intel_ethernet::descriptors::AdvancedRxDescriptor\">AdvancedRxDescriptor</a>"],["impl FromBytes for <a class=\"struct\" href=\"intel_ethernet/descriptors/struct.LegacyTxDescriptor.html\" title=\"struct intel_ethernet::descriptors::LegacyTxDescriptor\">LegacyTxDescriptor</a>"]],
"madt":[["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtLocalApicAddressOverride.html\" title=\"struct madt::MadtLocalApicAddressOverride\">MadtLocalApicAddressOverride</a>"],["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtIntSrcOverride.html\" title=\"struct madt::MadtIntSrcOverride\">MadtIntSrcOverride</a>"],["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtLocalApic.html\" title=\"struct madt::MadtLocalApic\">MadtLocalApic</a>"],["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtIoApic.html\" title=\"struct madt::MadtIoApic\">MadtIoApic</a>"],["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtNonMaskableInterrupt.html\" title=\"struct madt::MadtNonMaskableInterrupt\">MadtNonMaskableInterrupt</a>"],["impl FromBytes for <a class=\"struct\" href=\"madt/struct.MadtLocalX2Apic.html\" title=\"struct madt::MadtLocalX2Apic\">MadtLocalX2Apic</a>"]],
"memory_structs":[["impl FromBytes for <a class=\"struct\" href=\"memory_structs/struct.PhysicalAddress.html\" title=\"struct memory_structs::PhysicalAddress\">PhysicalAddress</a>"],["impl FromBytes for <a class=\"struct\" href=\"memory_structs/struct.VirtualAddress.html\" title=\"struct memory_structs::VirtualAddress\">VirtualAddress</a>"]],
"mlx_ethernet":[["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/work_queue/struct.WorkQueueEntrySend.html\" title=\"struct mlx_ethernet::work_queue::WorkQueueEntrySend\">WorkQueueEntrySend</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/work_queue/struct.WorkQueueEntryReceive.html\" title=\"struct mlx_ethernet::work_queue::WorkQueueEntryReceive\">WorkQueueEntryReceive</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/command_queue/struct.CommandQueueEntry.html\" title=\"struct mlx_ethernet::command_queue::CommandQueueEntry\">CommandQueueEntry</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/completion_queue/struct.CompletionQueueDoorbellRecord.html\" title=\"struct mlx_ethernet::completion_queue::CompletionQueueDoorbellRecord\">CompletionQueueDoorbellRecord</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/work_queue/struct.DoorbellRecord.html\" title=\"struct mlx_ethernet::work_queue::DoorbellRecord\">DoorbellRecord</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/event_queue/struct.EventQueueEntry.html\" title=\"struct mlx_ethernet::event_queue::EventQueueEntry\">EventQueueEntry</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/completion_queue/struct.CompletionQueueEntry.html\" title=\"struct mlx_ethernet::completion_queue::CompletionQueueEntry\">CompletionQueueEntry</a>"],["impl FromBytes for <a class=\"struct\" href=\"mlx_ethernet/initialization_segment/struct.InitializationSegment.html\" title=\"struct mlx_ethernet::initialization_segment::InitializationSegment\">InitializationSegment</a>"]],
"multicore_bringup":[["impl FromBytes for <a class=\"struct\" href=\"multicore_bringup/struct.GraphicInfo.html\" title=\"struct multicore_bringup::GraphicInfo\">GraphicInfo</a>"]],
"page_table_entry":[["impl FromBytes for <a class=\"struct\" href=\"page_table_entry/struct.PageTableEntry.html\" title=\"struct page_table_entry::PageTableEntry\">PageTableEntry</a>"]],
"pci":[["impl FromBytes for <a class=\"struct\" href=\"pci/struct.MsixVectorEntry.html\" title=\"struct pci::MsixVectorEntry\">MsixVectorEntry</a>"]],
"rsdp":[["impl FromBytes for <a class=\"struct\" href=\"rsdp/struct.Rsdp.html\" title=\"struct rsdp::Rsdp\">Rsdp</a>"]],
"sdt":[["impl FromBytes for <a class=\"struct\" href=\"sdt/struct.Sdt.html\" title=\"struct sdt::Sdt\">Sdt</a>"],["impl FromBytes for <a class=\"struct\" href=\"sdt/struct.GenericAddressStructure.html\" title=\"struct sdt::GenericAddressStructure\">GenericAddressStructure</a>"]],
"uart_pl011":[["impl FromBytes for <a class=\"struct\" href=\"uart_pl011/struct.Pl011_Regs.html\" title=\"struct uart_pl011::Pl011_Regs\">Pl011_Regs</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()