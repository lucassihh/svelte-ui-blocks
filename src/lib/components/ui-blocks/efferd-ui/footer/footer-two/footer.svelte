<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	// SVG
	import Logo from "$lib/assets/svg/logo.svelte";
	import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
	import GithubIcon from "$lib/assets/svg/social/github.svelte";
	import XIcon from "$lib/assets/svg/social/x.svelte";
	import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
	import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";
	import YoutubeIcon from "$lib/assets/svg/social/youtube.svelte";

	import { SvelteDate } from "svelte/reactivity";

	import type { Component } from "svelte";

	type FooterLink = {
		title: string;
		href: string;
	};

	type SocialLink = {
		link: string;
		icon: Component;
		label: string;
	};

	const company: FooterLink[] = [
		{
			title: "About Us",
			href: "/"
		},
		{
			title: "Careers",
			href: "/"
		},
		{
			title: "Brand assets",
			href: "/"
		},
		{
			title: "Privacy Policy",
			href: "/"
		},
		{
			title: "Terms of Service",
			href: "/"
		}
	];

	const resources: FooterLink[] = [
		{
			title: "Blog",
			href: "/"
		},
		{
			title: "Help Center",
			href: "/"
		},
		{
			title: "Contact Support",
			href: "/"
		},
		{
			title: "Community",
			href: "/"
		},
		{
			title: "Security",
			href: "/"
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: FacebookIcon,
			link: "https://facebook.com",
			label: "Facebook"
		},
		{
			icon: GithubIcon,
			link: "https://github.com",
			label: "Github"
		},
		{
			icon: InstagramIcon,
			link: "https://instagram.com",
			label: "Instagram"
		},
		{
			icon: LinkedinIcon,
			link: "https://linkedin.com",
			label: "LinkedIn"
		},
		{
			icon: XIcon,
			link: "https://x.com",
			label: "X"
		},
		{
			icon: YoutubeIcon,
			link: "https://youtube.com",
			label: "YouTube"
		}
	];

	const currentYear = new SvelteDate().getFullYear();
</script>

<footer class="relative">
	<div
		class={cn(
			"max-w-5xl lg:border-x mx-auto",
			"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="inset-x-0 absolute h-px w-full bg-border"></div>

		<div class="max-w-5xl gap-6 p-4 grid grid-cols-6">
			<div class="gap-4 pt-5 md:col-span-4 col-span-6 flex flex-col">
				<a class="w-max" href="/">
					<Logo class="h-5 w-auto" />
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Beautify your app with efferd.
				</p>
				<div class="gap-2 flex">
					{#each socialLinks as item, index (`social-${item.link}-${index}`)}
						{@const SocialIcon = item.icon}
						<Button
							href={item.link}
							aria-label={item.label}
							rel="noreferrer"
							size="icon-sm"
							target="_blank"
							variant="outline"
						>
							<SocialIcon class="size-4" />
						</Button>
					{/each}
				</div>
			</div>

			<div class="md:col-span-1 col-span-3 w-full">
				<span class="text-xs text-muted-foreground">Resources</span>
				<div class="mt-2 gap-2 flex flex-col">
					{#each resources as item (item.title)}
						<a class="text-sm w-max hover:underline" href={item.href}>
							{item.title}
						</a>
					{/each}
				</div>
			</div>

			<div class="md:col-span-1 col-span-3 w-full">
				<span class="text-xs text-muted-foreground">Company</span>
				<div class="mt-2 gap-2 flex flex-col">
					{#each company as item (item.title)}
						<a class="text-sm w-max hover:underline" href={item.href}>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="inset-x-0 absolute h-px w-full bg-border"></div>

		<div class="max-w-4xl gap-2 py-4 flex flex-col justify-between">
			<p class="text-sm font-light text-center text-muted-foreground">
				&copy; {currentYear} efferd, All rights reserved
			</p>
		</div>
	</div>
</footer>
