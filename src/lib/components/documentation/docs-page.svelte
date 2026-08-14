<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	// Markdown
	import H1 from "$lib/components/ui/markdown/H1.svelte";
	import Paragraph from "$lib/components/ui/markdown/Paragraph.svelte";

	// Props Types
	type DocsPageProps = {
		title: string;
		description: string;
		class?: string;
		actions?: Snippet;
		children?: Snippet;
	};

	// Props
	let { title, description, class: className = "", actions, children }: DocsPageProps = $props();
</script>

<section class={cn("mx-auto w-full", className)}>
	<div class="overflow-hidden">
		<div class="px-4 py-8 border-b border-border/80">
			<div class="max-w-3xl mx-auto">
				<H1>{title}</H1>
				<Paragraph class="max-w-2xl text-base leading-7 sm:text-base">{description}</Paragraph>

				{#if actions}
					<div class="mt-5 gap-2 flex flex-wrap">
						{@render actions()}
					</div>
				{/if}
			</div>
		</div>

		<div class="px-4 py-8">
			<div class="max-w-3xl mx-auto">
				{@render children?.()}
			</div>
		</div>
	</div>
</section>
