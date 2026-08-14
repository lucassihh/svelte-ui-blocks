<script lang="ts">
	import HeaderFive from "$lib/components/efferd-ui/header/header-five/header.svelte";
</script>

<svelte:head>
	<title>Header Five Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header Five in Svelte Efferd." />
</svelte:head>

<div class="min-h-[190vh] bg-background">
	<HeaderFive />
	<main class="max-w-5xl px-4 py-12 mx-auto">
		<div class="space-y-6">
			<h1 class="text-4xl font-semibold tracking-tight">Header Five Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the rounded mega-menu header and sticky transition.
			</p>
		</div>
	</main>
</div>
