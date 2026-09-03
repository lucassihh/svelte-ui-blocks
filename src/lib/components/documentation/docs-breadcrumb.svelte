<script lang="ts">
	import { page } from "$app/state";

	// UI
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";

	// Function to format segment URL ("example-name" -> "Example Name")
	function formatSegment(segment: string) {
		return segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
	}

	// Function to Get URL and format
	let currentPageTitle = $derived.by(() => {
		const segments = page.url.pathname.split("/").filter(Boolean);
		if (segments.length > 1) {
			return formatSegment(segments[segments.length - 1]);
		}
		return null;
	});
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			{#if currentPageTitle}
				<Breadcrumb.Link href="/documentation">Documentation</Breadcrumb.Link>
			{:else}
				<Breadcrumb.Page>Documentation</Breadcrumb.Page>
			{/if}
		</Breadcrumb.Item>

		{#if currentPageTitle}
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{currentPageTitle}</Breadcrumb.Page>
			</Breadcrumb.Item>
		{/if}
	</Breadcrumb.List>
</Breadcrumb.Root>
