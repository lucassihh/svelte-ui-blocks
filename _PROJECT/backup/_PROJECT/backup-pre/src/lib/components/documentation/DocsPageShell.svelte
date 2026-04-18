<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type DocsPageShellProps = {
		title: string;
		description?: string;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { H1, Paragraph } from "$lib/components/markdown/index";
	import { getDocsLayoutContext } from "./docs-layout-context";

	let { title, description, children }: DocsPageShellProps = $props();

	const { registerDocContent } = getDocsLayoutContext();
	let contentRef = $state<HTMLElement>();

	$effect(() => {
		registerDocContent(contentRef);

		return () => {
			registerDocContent(undefined);
		};
	});
</script>

<!-- Documentation Content Padding -->
<div class="h-full p-4">
	<article data-doc-content bind:this={contentRef}>
		<section>
			<H1 id="introduction">{title}</H1>
			{#if description}
				<Paragraph class="mt-3">{description}</Paragraph>
			{/if}
		</section>
		{@render children?.()}
	</article>
</div>
