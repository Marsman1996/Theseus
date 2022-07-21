window.SIDEBAR_ITEMS = {"fn":[["allocate_pages","Allocates the given number of pages with no constraints on the starting virtual address."],["allocate_pages_at","Allocates the given number of pages starting at (inclusive of) the page containing the given `VirtualAddress`."],["allocate_pages_by_bytes","Allocates pages with no constraints on the starting virtual address,  with a size given by the number of bytes. "],["allocate_pages_by_bytes_at","Allocates pages starting at the given `VirtualAddress` with a size given in number of bytes. "],["allocate_pages_by_bytes_deferred","Similar to `allocated_pages_deferred()`, but accepts a size value for the allocated pages in number of bytes instead of number of pages. "],["allocate_pages_deferred","The core page allocation routine that allocates the given number of virtual pages, optionally at the requested starting `VirtualAddress`."],["init","Initialize the page allocator."]],"struct":[["AllocatedPages","Represents a range of allocated `VirtualAddress`es, specified in `Page`s. "],["DeferredAllocAction","A series of pending actions related to page allocator bookkeeping, which may result in heap allocation. "]]};