<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	// SVG
	import AppleLogo from "$lib/assets/svg/brand/apple.svelte";
	import PlayStoreLogo from "$lib/assets/svg/brand/play-store.svelte";
	import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
	import XLogo from "$lib/assets/svg/social/x.svelte";
	import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
	import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";

	import type { Component } from "svelte";

	type FooterLink = {
		href: string;
		label: string;
	};

	type FooterSection = {
		title: string;
		links: FooterLink[];
	};

	type SocialLink = {
		href: string;
		icon: Component;
		label: string;
	};

	const footerLinks: FooterSection[] = [
		{
			title: "Company",
			links: [
				{ href: "/", label: "Engineering Blog" },
				{ href: "/", label: "Marketplace" },
				{ href: "/", label: "What's New" },
				{ href: "/", label: "About" },
				{ href: "/", label: "Press" },
				{ href: "/", label: "Careers" },
				{ href: "/", label: "Social Good" }
			]
		},
		{
			title: "Community",
			links: [
				{ href: "/", label: "Linktree for Enterprise" },
				{ href: "/", label: "2023 Creator Report" },
				{ href: "/", label: "2022 Creator Report" },
				{ href: "/", label: "Charities" },
				{ href: "/", label: "What's Trending" },
				{ href: "/", label: "Creator Profile Directory" },
				{ href: "/", label: "Explore Templates" }
			]
		},
		{
			title: "Support",
			links: [
				{ href: "/", label: "Help Topics" },
				{ href: "/", label: "Getting Started" },
				{ href: "/", label: "Linoree Pro" },
				{ href: "/", label: "Features & How-tos" },
				{ href: "/", label: "FAQs" },
				{ href: "/", label: "Report a Violation" }
			]
		},
		{
			title: "Legal",
			links: [
				{ href: "/", label: "Terms & Conditions" },
				{ href: "/", label: "Privacy Notice" },
				{ href: "/", label: "Cookie Notice" },
				{ href: "/", label: "Trust Center" },
				{ href: "/", label: "Cookie Preferences" },
				{ href: "/", label: "Transparency Report" },
				{ href: "/", label: "Law Enforcement Access Policy" }
			]
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: FacebookIcon,
			href: "https://facebook.com",
			label: "Facebook"
		},
		{
			icon: InstagramIcon,
			href: "https://instagram.com",
			label: "Instagram"
		},
		{
			icon: LinkedinIcon,
			href: "https://linkedin.com",
			label: "LinkedIn"
		},
		{
			icon: XLogo,
			href: "https://x.com",
			label: "X"
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t">
	<div class="max-w-6xl px-4 lg:px-6 mx-auto">
		<div class="gap-8 py-8 md:grid-cols-4 grid grid-cols-2">
			{#each footerLinks as item (item.title)}
				<div>
					<h3 class="mb-4 text-xs">{item.title}</h3>
					<ul class="space-y-2 text-sm text-muted-foreground">
						{#each item.links as link (link.label)}
							<li>
								<a class="hover:text-foreground" href={link.href}>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="h-px bg-border"></div>

		<div class="gap-4 py-5 flex flex-wrap items-center justify-between">
			<div class="gap-2 flex items-center">
				{#each socialLinks as item, index (`social-${item.href}-${index}`)}
					{@const SocialIcon = item.icon}
					<Button href={item.href} aria-label={item.label} size="icon-sm" variant="outline">
						<SocialIcon class="size-4" />
					</Button>
				{/each}
			</div>

			<div class="gap-4 flex">
				<Button href="https://play.google.com/store" class="h-11" target="_blank" rel="noreferrer">
					<PlayStoreLogo class="size-5" />
					<div class="pr-2 flex flex-col items-start justify-center text-left">
						<span class="font-light tracking-tighter text-[10px] leading-none"> GET IT ON </span>
						<p class="text-base font-bold leading-none">Google Play</p>
					</div>
				</Button>

				<Button
					href="https://www.apple.com/app-store/"
					class="h-11"
					target="_blank"
					rel="noreferrer"
				>
					<AppleLogo class="size-5" />
					<div class="pr-2 flex flex-col items-start justify-center text-left">
						<span class="tracking-tighter text-[10px] leading-none">Download on the</span>
						<p class="text-base font-bold leading-none">App Store</p>
					</div>
				</Button>
			</div>
		</div>

		<div class="h-px bg-border"></div>

		<div class="py-4 text-xs text-center text-muted-foreground">
			<p>&copy; {currentYear} efferd, All rights reserved</p>
		</div>
	</div>
</footer>
