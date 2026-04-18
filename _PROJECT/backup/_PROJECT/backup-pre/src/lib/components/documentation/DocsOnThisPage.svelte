<script lang="ts">
  // State
	import { page } from "$app/state";
  // Icons
  import Icon from "@iconify/svelte";
  // Necessary
  import { docsV2Pages } from "$lib/config/documentation";
	import Toc from "./toc/toc.svelte";
	import { UseToc } from "$lib/hooks/use-toc.svelte";
	import { getDocsLayoutContext } from "./docs-layout-context";

  
	const { getDocContent } = getDocsLayoutContext();
	const toc = new UseToc();

	const normalizePath = (value: string) => (value === "/" ? value : value.replace(/\/+$/, ""));

	const currentPageMeta = $derived.by(() => {
		const currentPath = normalizePath(page.url.pathname);
		return docsV2Pages.find((item) => normalizePath(item.path) === currentPath);
	});

	const showToc = $derived(currentPageMeta?.toc ?? true);

	$effect(() => {
		// Retrieve the element reactively using the context's getter function
		toc.ref = getDocContent();
	});
</script>



  <!-- In This Page Menu --> 
        {#if showToc && toc.current.length > 0}
        <aside class="flex flex-col pl-4">
            <p
              class="flex items-center gap-2 text-xs font-semibold text-muted-foreground capitalize mb-2"
            >
              <Icon icon="solar:paperclip-2-bold-duotone" class="size-5" />
              on this page:
            </p>
            <Toc toc={toc.current} />
        </aside>
      {/if}       
