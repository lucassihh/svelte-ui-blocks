<script lang="ts">
	import HeaderThree from "$lib/components/efferd-ui/header/header-three/header.svelte";
</script>

<svelte:head>
	<title>Header Three Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header Three in Svelte Efferd." />
</svelte:head>

<div class="min-h-[120vh] bg-background">
	<HeaderThree />
	<main class="max-w-5xl px-4 py-12 mx-auto">
		<div class="space-y-4">
			<h1 class="text-3xl font-semibold tracking-tight">Header Three Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the mega-menu header state and mobile menu experience.
			</p>
		</div>
	</main>
</div>
