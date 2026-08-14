<script lang="ts">
	import HeaderTwo from "$lib/components/efferd-ui/header/header-two/header.svelte";
	import Hero from "./hero.svelte";
	import LogoSection from "./logo-section.svelte";
</script>

<div
	class="px-4 relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
>
	<HeaderTwo />
	<main
		class="max-w-4xl before:-inset-y-14 after:-inset-y-14 relative mx-auto grow before:absolute before:-left-px before:w-px before:bg-border after:absolute after:-right-px after:w-px after:bg-border"
	>
		<Hero />
		<LogoSection />
	</main>
</div>
