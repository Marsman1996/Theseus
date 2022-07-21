window.SIDEBAR_ITEMS = {"constant":[["CACHE_BLOCK_HEIGHT","The height of a cache block. In every iteration the compositor will deal with groups of 16 rows and cache them."]],"struct":[["CacheBlock","A `CacheBlock` represents the cached (previously-composited) content of a range of rows in the source framebuffer.  It specifies the rectangular region in the destination framebuffer and the hash. Once cached, a `CacheBlock` block is independent of the source framebuffer it came from. `content_hash` is the hash value of the actual pixel contents in the cached block. A cache block is identical to some new framebuffer rows to be updated if they share the same `content_hash`, location and width."],["FRAME_COMPOSITOR","The instance of the framebuffer compositor."],["FrameCompositor","The framebuffer compositor structure. It caches framebuffer rows since last update as soft states for better performance."]]};