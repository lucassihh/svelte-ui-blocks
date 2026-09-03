<script lang="ts">
	import {
		BeaconIcon,
		BoltIcon,
		CiscoIcon,
		HuluIcon,
		SpotifyIcon,
		SupabaseIcon,
		VercelIcon
	} from "$lib/assets/svg/index.ts";
	import type { Component } from "svelte";

	type LogoGroup = "ai" | "hosting" | "payments" | "streaming";
	type LogoItem = {
		key: string;
		component: Component<any>;
		className: string;
		props?: Record<string, unknown>;
	};

	const logos: Record<LogoGroup, LogoItem[]> = {
		ai: [
			{ key: "bolt", component: BoltIcon, className: "h-3.5 w-full" },
			{ key: "beacon", component: BeaconIcon, className: "h-3.5 w-full" },
			{ key: "hulu", component: HuluIcon, className: "h-3.5 w-full" }
		],
		hosting: [
			{ key: "supabase", component: SupabaseIcon, className: "size-5" },
			{ key: "spotify", component: SpotifyIcon, className: "h-5 w-full" },
			{
				key: "vercel",
				component: VercelIcon,
				className: "h-3.5 w-full",
				props: { variant: "full" }
			}
		],
		payments: [
			{ key: "hulu", component: HuluIcon, className: "h-3.5 w-full" },
			{
				key: "vercel",
				component: VercelIcon,
				className: "h-3.5 w-full",
				props: { variant: "full" }
			},
			{ key: "spotify", component: SpotifyIcon, className: "h-5 w-full" }
		],
		streaming: [
			{ key: "cisco", component: CiscoIcon, className: "h-5 w-full" },
			{ key: "hulu", component: HuluIcon, className: "h-3.5 w-full" },
			{ key: "spotify", component: SpotifyIcon, className: "h-5 w-full" }
		]
	};

	const groups = Object.keys(logos) as LogoGroup[];

	let currentIndex = $state(0);
	let currentGroup = $derived(groups[currentIndex]);

	$effect(() => {
		const timer = setInterval(() => {
			currentIndex = (currentIndex + 1) % groups.length;
		}, 2500);

		return () => clearInterval(timer);
	});
</script>

<section data-theme="veil" class="bg-background py-12">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto grid h-8 max-w-2xl grid-cols-3 items-center gap-8">
			{#each logos[currentGroup] as logo, i (`${currentGroup}-${logo.key}-${i}`)}
				<div
					class="logo-item flex items-center justify-center **:fill-foreground!"
					style="animation-delay: {i * 100}ms"
				>
					<logo.component class={logo.className} {...logo.props} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.logo-item {
		animation: logo-enter 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	@keyframes logo-enter {
		from {
			opacity: 0;
			transform: translateY(12px);
			filter: blur(6px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
			filter: blur(0);
		}
	}
</style>
