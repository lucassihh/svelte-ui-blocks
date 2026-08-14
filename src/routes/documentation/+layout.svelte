<script lang="ts">
	// UI
	import Button from "$lib/components/ui/button/button.svelte";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	// Necessary
	import DocsBreadcrumb from "$lib/components/documentation/docs-breadcrumb.svelte";
	import MobileDrawer from "$lib/components/documentation/mobile-drawer.svelte";
	import DesktopNavbar from "$lib/components/documentation/desktop-nav.svelte";

	import type { Snippet } from "svelte";
	let { children } = $props();

	// For Scroll to Top
	import { scrollY } from "svelte/reactivity/window";
	import { fly } from "svelte/transition";
	let visible = $derived(typeof scrollY.current === "undefined" ? 600 : scrollY.current > 800);
</script>

<!-- Documentation Layout -->
<div class="mt-4 max-w-7xl md:flex-row md:p-2 mx-auto flex w-full flex-col justify-center bg-card">
	<!-- Desktop Aside -->
	<div class="md:block hidden">
		<DesktopNavbar />
	</div>

	<main class="md:rounded-xl min-h-screen w-full overflow-hidden bg-background">
		<!-- Breadcrumb and Mobile Drawer -->
		<div class="gap-2 p-4 flex items-center">
			<div class="md:hidden block">
				<MobileDrawer />
			</div>
			<DocsBreadcrumb />
		</div>

		{@render children?.()}

		{#if visible}
			{@render scrollToTop()}
		{/if}

		{#snippet scrollToTop()}
			<div in:fly={{ y: 20 }} out:fly={{ y: 20 }} class="right-4 bottom-4 fixed z-50">
				<Button
					size="icon"
					variant="secondary"
					class="rounded-full"
					onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</Button>
			</div>
		{/snippet}
	</main>
</div>
