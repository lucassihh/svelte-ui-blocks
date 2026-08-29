<script lang="ts">
	import Seo from "$lib/components/base/Seo.svelte";
	import BlockPreview from "$lib/components/blocks/blocks-preview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Blur Fade Blocks"
	desc="Preview curated blur-fade block variants with a tree-style source explorer in Svelte Efferd Blocks."
	link="/blocks/blur-fade"
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
