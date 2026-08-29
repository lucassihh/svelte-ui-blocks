<script lang="ts">
	import Seo from "$lib/components/base/Seo.svelte";
	import BlockPreview from "$lib/components/blocks/blocks-preview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Marquee Blocks"
	desc="Preview curated marquee block variants with a tree-style source explorer in Svelte Efferd Blocks."
	link="/blocks/marquee"
/>

{#each data.blocks as block (block.id)}
	<BlockPreview
		id={block.id}
		title={block.title}
		description={block.description}
		previewComponent={block.previewComponent}
		codeTree={block.codeTree}
		previewHref={block.previewHref}
		previewMode={block.previewMode}
		previewHeight={block.previewHeight}
		installId={block.installId}
	/>
{/each}
