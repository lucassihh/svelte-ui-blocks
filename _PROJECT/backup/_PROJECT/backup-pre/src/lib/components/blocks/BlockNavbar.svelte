<script lang="ts">
	import { page } from "$app/state";
	import { category_blocks, category_blocks_veil } from "$lib/config/blocks_main/category_block";
	import { cn } from "$lib/utils";

  // Verify Path for Active Items
	let pathname = $derived(page.url.pathname);
  let verify = $derived(page.url.pathname.startsWith("/blocks_veil/"));
</script>


<!-- Blocks Navbar Menu -->
<div class="relative z-20 border-b border-border border-dashed">
	<div class="mx-auto max-w-7xl">
		<nav class="flex items-center lg:-mx-3">
      <ul
				  class="relative mx-auto -mb-px flex h-11 snap-x snap-proximity scroll-px-6 items-center gap-6 overflow-x-auto overflow-y-hidden px-6 lg:scroll-px-2 lg:gap-4"
			  >   
           {#if verify}
              {#each category_blocks_veil as category}
                <li
                  class={cn(
                    "flex h-full snap-start items-center border-b border-b-transparent",
                    pathname === category.href && "border-primary"
                  )}
                >
                  <a
                    href={category.href}
                    class={cn(
                      pathname === category.href && "text-foreground!",
                      "flex h-7 w-fit items-center rounded-full px-1 text-[13px] text-nowrap text-zinc-700 hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground"
                    )}
                  >
                    <span class="block w-max text-nowrap capitalize">{category.title}</span>
                  </a>
                </li>
              {/each}
            {:else}   
             {#each category_blocks as category}
                <li
                  class={cn(
                    "flex h-full snap-start items-center border-b border-b-transparent",
                    pathname === category.href && "border-primary"
                  )}
                >
                  <a
                    href={category.href}
                    class={cn(
                      pathname === category.href && "text-foreground!",
                      "flex h-7 w-fit items-center rounded-full px-1 text-[13px] text-nowrap text-zinc-700 hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground"
                    )}
                  >
                    <span class="block w-max text-nowrap capitalize">{category.title}</span>
                  </a>
                </li>
             {/each}
           {/if}
      </ul>
		</nav>
	</div>
</div>
