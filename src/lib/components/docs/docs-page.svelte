<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import H1 from "$lib/components/markdown/H1.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
    import DocsBreadcrumb from "$lib/components/docs/docs-breadcrumb.svelte";
	type DocsPageProps = {
		title: string;
		description: string;
		class?: string;
		actions?: Snippet;
		children?: Snippet;
	};

	let { title, description, class: className = "", actions, children }: DocsPageProps = $props();
</script>


<section class={cn("mx-auto w-full", className)}>
	<div class="overflow-hidden">
		<div class="border-b border-border/80 px-4 py-8">
            <!-- Breadcrumb -->
            <DocsBreadcrumb/>
			<div class="mx-auto max-w-3xl">
				<H1>{title}</H1>
				<Paragraph class="max-w-2xl text-base leading-7 sm:text-base"
					>{description}</Paragraph
				>

				{#if actions}
					<div class="mt-5 flex flex-wrap gap-2">
						{@render actions()}
					</div>
				{/if}
			</div>
		</div>

		<div class="px-4 py-8">
			<div class="mx-auto max-w-3xl">
				{@render children?.()}
			</div>
		</div>
	</div>
</section>
