<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import GithubLogo from "$lib/assets/svg/social/github.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";
	import XLogo from "$lib/assets/svg/social/x.svelte";
	import type { Component } from "svelte";

	type NavLink = {
		href: string;
		label: string;
	};

	type SocialLink = {
		href: string;
		label: string;
		icon: Component;
	};

	const navLinks: NavLink[] = [
		{ href: "/", label: "Features" },
		{ href: "/", label: "Blog" },
		{ href: "/", label: "About" },
		{ href: "/", label: "Contact" },
		{ href: "/", label: "Licence" },
		{ href: "/", label: "Privacy" }
	];

	const socialLinks: SocialLink[] = [
		{
			href: "https://x.com",
			label: "X",
			icon: XLogo
		},
		{
			href: "https://github.com",
			label: "Github",
			icon: GithubLogo
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="max-w-5xl *:px-4 *:md:px-6 mx-auto">
	<div class="gap-6 py-6 flex flex-col">
		<div class="flex items-center justify-between">
			<div class="gap-2 flex items-center">
				<Logo class="h-4.5 w-auto" />
			</div>

			<div class="flex items-center">
				{#each socialLinks as social (social.label)}
					{@const SocialIcon = social.icon}
					<Button
						href={social.href}
						aria-label={social.label}
						size="icon-sm"
						variant="ghost"
						rel="noreferrer"
						target="_blank"
					>
						<SocialIcon class="size-4" />
					</Button>
				{/each}
			</div>
		</div>

		<nav>
			<ul class="gap-4 text-sm font-medium md:gap-6 flex flex-wrap text-muted-foreground">
				{#each navLinks as link (link.label)}
					<li>
						<a class="hover:text-foreground" href={link.href}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="gap-4 py-4 text-sm flex items-center justify-between border-t text-muted-foreground">
		<p>&copy; {currentYear} efferd</p>

		<p class="gap-1 inline-flex items-center">
			<span>Built by</span>
			<a
				aria-label="x/twitter"
				class="gap-1 inline-flex items-center text-foreground/80 hover:text-foreground hover:underline"
				href="https://x.com/Sikandar_Bhide"
				rel="noreferrer"
				target="_blank"
			>
				<img
					alt="bhide svelte"
					class="size-4 rounded-full"
					height="16"
					src="https://avatars.githubusercontent.com/u/93428946?v=4"
					width="16"
				/>
				Bhide Svelte
			</a>
		</p>
	</div>
</footer>
