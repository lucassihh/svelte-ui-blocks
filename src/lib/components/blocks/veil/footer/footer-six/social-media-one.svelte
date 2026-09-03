<script lang="ts">
	import { GithubIcon, XIcon } from "$lib/assets/svg/index.ts";
	import { Button } from "$lib/components/ui/veil-ui/button";
	import type { Component } from "svelte";

	type SocialMedia = "twitter" | "linkedin" | "youtube";

	type SocialItem = {
		id: SocialMedia;
		label: string;
		href: string;
		icon: Component;
	};

	const socials: SocialItem[] = [
		{ id: "x", label: "X", href: "#", icon: XIcon },
		{ id: "github", label: "Github", href: "#", icon: GithubIcon }
	];

	let hoveredSocialMedia = $state<SocialMedia | null>(null);

	const tooltipLabel = $derived.by(() => {
		switch (hoveredSocialMedia ?? "x") {
			case "x":
				return "Follow us on X";
			case "github":
				return "Follow us on Github";
			default:
				return "Follow us";
		}
	});
</script>

<div class="flex w-fit flex-col items-end">
	<div class="-mr-2 mb-2 flex">
		{#each socials as item (item.id)}
			<Button
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				referrerpolicy="no-referrer"
				size="icon"
				variant="ghost"
				aria-label={"Follow us on " + item.label}
				aria-pressed={hoveredSocialMedia === item.id}
				class={hoveredSocialMedia === item.id ? "text-foreground" : ""}
				onmouseenter={() => (hoveredSocialMedia = item.id)}
				onmouseleave={() => (hoveredSocialMedia = null)}
				onfocus={() => (hoveredSocialMedia = item.id)}
				onblur={() => (hoveredSocialMedia = null)}
			>
				<item.icon />
			</Button>
		{/each}
	</div>

	<div
		aria-live="polite"
		class="w-fit text-xs leading-none text-muted-foreground transition-opacity duration-200"
		class:opacity-100={hoveredSocialMedia !== null}
		class:opacity-0={hoveredSocialMedia === null}
	>
		{tooltipLabel}
	</div>
</div>
