<script lang="ts">
	import PnpmLogo from "$lib/svgs/logos/pnpm.svelte";
	import NpmLogo from "$lib/svgs/logos/npm.svelte";
	import YarnLogo from "$lib/svgs/logos/yarn.svelte";
	import BunLogo from "$lib/svgs/logos/bun.svelte";
	import type { Agent } from "$lib/ui/add/add.svelte.js";

	let { agent, class: className }: { agent: Agent; class?: string } = $props();
</script>

{#if agent === "pnpm"}
	<PnpmLogo class={className} />
{:else if agent === "npm"}
	<NpmLogo class={className} />
{:else if agent === "yarn"}
	<YarnLogo class={className} />
{:else if agent === "bun"}
	<BunLogo class={className} />
{/if}
