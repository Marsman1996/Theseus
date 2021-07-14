(function() {var implementors = {};
implementors["block_io"] = [{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;R&gt; for <a class=\"struct\" href=\"block_io/struct.ByteReaderWrapper.html\" title=\"struct block_io::ByteReaderWrapper\">ByteReaderWrapper</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"block_io/trait.BlockReader.html\" title=\"trait block_io::BlockReader\">BlockReader</a>,&nbsp;</span>","synthetic":false,"types":["block_io::ByteReaderWrapper"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"block_io/struct.ByteReaderWriterWrapper.html\" title=\"struct block_io::ByteReaderWriterWrapper\">ByteReaderWriterWrapper</a>&lt;RW&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"block_io/trait.BlockReader.html\" title=\"trait block_io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"block_io/trait.BlockWriter.html\" title=\"trait block_io::BlockWriter\">BlockWriter</a>,&nbsp;</span>","synthetic":false,"types":["block_io::ByteReaderWriterWrapper"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"block_io/struct.ByteWriterWrapper.html\" title=\"struct block_io::ByteWriterWrapper\">ByteWriterWrapper</a>&lt;RW&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"block_io/trait.BlockReader.html\" title=\"trait block_io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"block_io/trait.BlockWriter.html\" title=\"trait block_io::BlockWriter\">BlockWriter</a>,&nbsp;</span>","synthetic":false,"types":["block_io::ByteWriterWrapper"]},{"text":"impl&lt;IO:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Mutex&lt;IO, Spin&gt;&gt;&gt; for <a class=\"struct\" href=\"block_io/struct.LockedIo.html\" title=\"struct block_io::LockedIo\">LockedIo</a>&lt;IO&gt;","synthetic":false,"types":["block_io::LockedIo"]}];
implementors["device_manager"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"struct\" href=\"device_manager/struct.FatFsIoErrorAdapter.html\" title=\"struct device_manager::FatFsIoErrorAdapter\">FatFsIoErrorAdapter</a>","synthetic":false,"types":["device_manager::FatFsIoErrorAdapter"]}];
implementors["framebuffer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"color/struct.Color.html\" title=\"struct color::Color\">Color</a>&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.RGBPixel.html\" title=\"struct framebuffer::pixel::RGBPixel\">RGBPixel</a>","synthetic":false,"types":["framebuffer::pixel::RGBPixel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"color/struct.Color.html\" title=\"struct color::Color\">Color</a>&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.AlphaPixel.html\" title=\"struct framebuffer::pixel::AlphaPixel\">AlphaPixel</a>","synthetic":false,"types":["framebuffer::pixel::AlphaPixel"]}];
implementors["path"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>","synthetic":false,"types":["path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]}];
implementors["task"] = [{"text":"impl&lt;'p&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/panic/struct.PanicInfo.html\" title=\"struct core::panic::PanicInfo\">PanicInfo</a>&lt;'p&gt;&gt; for <a class=\"struct\" href=\"task/struct.PanicInfoOwned.html\" title=\"struct task::PanicInfoOwned\">PanicInfoOwned</a>","synthetic":false,"types":["task::PanicInfoOwned"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()