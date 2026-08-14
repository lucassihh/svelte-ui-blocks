<script lang="ts">
	import HeaderTwo from "$lib/components/efferd-ui/header/header-two/header.svelte";
</script>

<svelte:head>
	<title>Header Two Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header Two in Svelte Efferd." />
</svelte:head>

<div class="min-h-[180vh] bg-background">
	<HeaderTwo />
	<main class="max-w-4xl px-4 py-12 mx-auto">
		<div class="space-y-4">
			<h1 class="text-3xl font-semibold tracking-tight">Header Two Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the framed sticky header state and compact mobile menu.
			</p>
		</div>
	</main>
</div>
