<script lang="ts">
	import { GithubIcon, XIcon } from "$lib/assets/svg/index.ts";
	import Logo from "$lib/assets/svg/logo.svelte";
	import type { Component } from "svelte";

	type LinkItem = { label: string; href: string };
	type SocialItem = { icon: Component; href: string; label: string };

	const links: LinkItem[] = [
		{ label: "Features", href: "#" },
		{ label: "Pricing", href: "#" },
		{ label: "About", href: "#" },
		{ label: "Blog", href: "#" },
		{ label: "Contact", href: "#" }
	];

	const social: SocialItem[] = [
		{ icon: XIcon, href: "#", label: "X" },
		{ icon: GithubIcon, href: "#", label: "LinkedIn" }
	];

	const year = new Date().getFullYear();
</script>

<footer data-theme="veil" class="@container border-t border-border bg-background py-12">
	<div class="mx-auto max-w-2xl px-6">
		<div class="flex flex-col items-center text-center">
			<a href="/" class="flex items-center gap-2">
				<Logo class="h-5" />
				Svelte UI
			</a>
			<nav class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
				{#each links as link (link.label)}
					<a
						href={link.href}
						class="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="mt-8 flex gap-4">
				{#each social as item (item.label)}
					<a
						href={item.href}
						class="size-4 rounded-full text-muted-foreground transition-colors hover:text-foreground"
						aria-label={item.label}
					>
						<item.icon />
					</a>
				{/each}
			</div>
			<p class="mt-8 text-sm text-muted-foreground">&copy; {year} Svelte UI.</p>
		</div>
	</div>
</footer>
