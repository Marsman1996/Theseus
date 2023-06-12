(function() {var implementors = {
"async_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"async_channel/enum.Error.html\" title=\"enum async_channel::Error\">Error</a>&gt; for Error"]],
"cpu":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ApicId&gt; for <a class=\"struct\" href=\"cpu/struct.CpuId.html\" title=\"struct cpu::CpuId\">CpuId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cpu/struct.CpuId.html\" title=\"struct cpu::CpuId\">CpuId</a>&gt; for ApicId"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cpu/struct.CpuId.html\" title=\"struct cpu::CpuId\">CpuId</a>&gt;&gt; for <a class=\"struct\" href=\"cpu/struct.OptionalCpuId.html\" title=\"struct cpu::OptionalCpuId\">OptionalCpuId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cpu/struct.OptionalCpuId.html\" title=\"struct cpu::OptionalCpuId\">OptionalCpuId</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cpu/struct.CpuId.html\" title=\"struct cpu::CpuId\">CpuId</a>&gt;"]],
"framebuffer":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Color&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.RGBPixel.html\" title=\"struct framebuffer::pixel::RGBPixel\">RGBPixel</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Color&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.AlphaPixel.html\" title=\"struct framebuffer::pixel::AlphaPixel\">AlphaPixel</a>"]],
"io":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for Error"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;R&gt; for <a class=\"struct\" href=\"io/struct.ByteReaderWrapper.html\" title=\"struct io::ByteReaderWrapper\">ByteReaderWrapper</a>&lt;R&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a>,</span>"],["impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"io/struct.ByteReaderWriterWrapper.html\" title=\"struct io::ByteReaderWriterWrapper\">ByteReaderWriterWrapper</a>&lt;RW&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"io/trait.BlockWriter.html\" title=\"trait io::BlockWriter\">BlockWriter</a>,</span>"],["impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"io/struct.ByteWriterWrapper.html\" title=\"struct io::ByteWriterWrapper\">ByteWriterWrapper</a>&lt;RW&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"io/trait.BlockWriter.html\" title=\"trait io::BlockWriter\">BlockWriter</a>,</span>"],["impl&lt;'io, IO, L, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;B&gt; for <a class=\"struct\" href=\"io/struct.LockableIo.html\" title=\"struct io::LockableIo\">LockableIo</a>&lt;'io, IO, L, B&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: 'io + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: for&lt;'a&gt; <a class=\"trait\" href=\"lockable/trait.Lockable.html\" title=\"trait lockable::Lockable\">Lockable</a>&lt;'a, IO&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;L&gt;,</span>"]],
"memory_structs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"memory_structs/struct.PageRange.html\" title=\"struct memory_structs::PageRange\">PageRange</a>&gt; for <a class=\"struct\" href=\"memory_structs/struct.CopyablePageRange.html\" title=\"struct memory_structs::CopyablePageRange\">CopyablePageRange</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"memory_structs/struct.CopyablePageRange.html\" title=\"struct memory_structs::CopyablePageRange\">CopyablePageRange</a>&gt; for <a class=\"struct\" href=\"memory_structs/struct.PageRange.html\" title=\"struct memory_structs::PageRange\">PageRange</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"memory_structs/struct.FrameRange.html\" title=\"struct memory_structs::FrameRange\">FrameRange</a>&gt; for <a class=\"struct\" href=\"memory_structs/struct.CopyableFrameRange.html\" title=\"struct memory_structs::CopyableFrameRange\">CopyableFrameRange</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"memory_structs/struct.CopyableFrameRange.html\" title=\"struct memory_structs::CopyableFrameRange\">CopyableFrameRange</a>&gt; for <a class=\"struct\" href=\"memory_structs/struct.FrameRange.html\" title=\"struct memory_structs::FrameRange\">FrameRange</a>"]],
"mlx_ethernet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mlx_ethernet/command_queue/enum.CommandQueueError.html\" title=\"enum mlx_ethernet::command_queue::CommandQueueError\">CommandQueueError</a>&gt; for &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>"]],
"net":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"net/enum.Error.html\" title=\"enum net::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"net/enum.Error.html\" title=\"enum net::Error\">Error</a>&gt; for Error"]],
"page_attribute_table":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"page_attribute_table/struct.PageAttributeTable.html\" title=\"struct page_attribute_table::PageAttributeTable\">PageAttributeTable</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.array.html\">64</a>]: IsU64Compatible,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"page_attribute_table/struct.PageAttributeTable.html\" title=\"struct page_attribute_table::PageAttributeTable\">PageAttributeTable</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.array.html\">64</a>]: IsU64Compatible,</span>"]],
"path":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"]],
"percent_encoding":[["impl&lt;'a, E:&nbsp;<a class=\"trait\" href=\"percent_encoding/trait.EncodeSet.html\" title=\"trait percent_encoding::EncodeSet\">EncodeSet</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentEncode.html\" title=\"struct percent_encoding::PercentEncode\">PercentEncode</a>&lt;'a, E&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentDecode.html\" title=\"struct percent_encoding::PercentDecode\">PercentDecode</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt;"]],
"pte_flags":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pte_flags/struct.PteFlags.html\" title=\"struct pte_flags::PteFlags\">PteFlags</a>&gt; for <a class=\"struct\" href=\"pte_flags/struct.PteFlagsX86_64.html\" title=\"struct pte_flags::PteFlagsX86_64\">PteFlagsX86_64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pte_flags/struct.PteFlagsX86_64.html\" title=\"struct pte_flags::PteFlagsX86_64\">PteFlagsX86_64</a>&gt; for <a class=\"struct\" href=\"pte_flags/struct.PteFlags.html\" title=\"struct pte_flags::PteFlags\">PteFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pte_flags/struct.PteFlags.html\" title=\"struct pte_flags::PteFlags\">PteFlags</a>&gt; for <a class=\"struct\" href=\"pte_flags/struct.PteFlagsAarch64.html\" title=\"struct pte_flags::PteFlagsAarch64\">PteFlagsAarch64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pte_flags/struct.PteFlagsAarch64.html\" title=\"struct pte_flags::PteFlagsAarch64\">PteFlagsAarch64</a>&gt; for <a class=\"struct\" href=\"pte_flags/struct.PteFlags.html\" title=\"struct pte_flags::PteFlags\">PteFlags</a>"]],
"signal_handler":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>&gt; for <a class=\"enum\" href=\"signal_handler/enum.ErrorCode.html\" title=\"enum signal_handler::ErrorCode\">ErrorCode</a>"]],
"str_ref":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"str_ref/struct.StrRef.html\" title=\"struct str_ref::StrRef\">StrRef</a>"]],
"task_struct":[["impl&lt;'p&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/panic/panic_info/struct.PanicInfo.html\" title=\"struct core::panic::panic_info::PanicInfo\">PanicInfo</a>&lt;'p&gt;&gt; for <a class=\"struct\" href=\"task_struct/struct.PanicInfoOwned.html\" title=\"struct task_struct::PanicInfoOwned\">PanicInfoOwned</a>"],["impl&lt;'t&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'t <a class=\"struct\" href=\"task_struct/struct.Task.html\" title=\"struct task_struct::Task\">Task</a>&gt; for <a class=\"enum\" href=\"task_struct/enum.InheritedStates.html\" title=\"enum task_struct::InheritedStates\">InheritedStates</a>&lt;'t&gt;"]],
"text_terminal":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.ForegroundColor.html\" title=\"struct text_terminal::ForegroundColor\">ForegroundColor</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.BackgroundColor.html\" title=\"struct text_terminal::BackgroundColor\">BackgroundColor</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.UnderlinedColor.html\" title=\"struct text_terminal::UnderlinedColor\">UnderlinedColor</a>"]],
"time":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"time/struct.Period.html\" title=\"struct time::Period\">Period</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"time/struct.Period.html\" title=\"struct time::Period\">Period</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u128.html\">u128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"time/struct.Period.html\" title=\"struct time::Period\">Period</a>"]],
"tsc":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tsc/struct.TscTicks.html\" title=\"struct tsc::TscTicks\">TscTicks</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u128.html\">u128</a>"]],
"unwind":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"unwind/struct.UnwindingContext.html\" title=\"struct unwind::UnwindingContext\">UnwindingContext</a>&gt; for (<a class=\"struct\" href=\"unwind/struct.StackFrameIter.html\" title=\"struct unwind::StackFrameIter\">StackFrameIter</a>, KillReason, TaskRef)"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()