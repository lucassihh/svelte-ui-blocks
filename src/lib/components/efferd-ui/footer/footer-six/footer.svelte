<script lang="ts">
	import AnimatedContainer from "./AnimatedContainer.svelte";
	import { Button } from "$lib/components/ui/button";

	// SVG
	import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
	import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
	import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";
	import YoutubeIcon from "$lib/assets/svg/social/youtube.svelte";

	import Logo from "$lib/assets/svg/logo.svelte";

	type FooterLink = {
		title: string;
		href: string;
		icon?: typeof Icon;
	};

	type FooterLinkGroup = {
		label: string;
		links: FooterLink[];
	};

	type SocialLink = {
		title: string;
		href: string;
		icon: typeof Icon;
	};

	const socialLinks: SocialLink[] = [
		{
			title: "Facebook",
			href: "https://facebook.com",
			icon: FacebookIcon
		},
		{
			title: "Instagram",
			href: "https://instagram.com",
			icon: InstagramIcon
		},
		{
			title: "Youtube",
			href: "https://youtube.com",
			icon: YoutubeIcon
		},
		{
			title: "LinkedIn",
			href: "https://linkedin.com",
			icon: LinkedinIcon
		}
	];

	const footerLinkGroups: FooterLinkGroup[] = [
		{
			label: "Product",
			links: [
				{ title: "Payments", href: "/" },
				{ title: "Cards & Issuing", href: "/" },
				{ title: "Lending & Credit", href: "/" },
				{ title: "Wealth Management", href: "/" },
				{ title: "Insurance", href: "/" },
				{ title: "Crypto Wallets", href: "/" },
				{ title: "Treasury Management", href: "/" },
				{ title: "Merchant Services", href: "/" },
				{ title: "Point of Sale", href: "/" },
				{ title: "Embedded Finance", href: "/" },
				{ title: "Open Banking API", href: "/" },
				{ title: "SDKs & Integrations", href: "/" },
				{ title: "Pricing", href: "/" }
			]
		},
		{
			label: "Resources",
			links: [
				{ title: "Blog", href: "/" },
				{ title: "Case Studies", href: "/" },
				{ title: "Documentation", href: "/" },
				{ title: "API Reference", href: "/" },
				{ title: "Developer Tools", href: "/" },
				{ title: "Whitepapers", href: "/" },
				{ title: "Reports & Research", href: "/" },
				{ title: "Events & Webinars", href: "/" },
				{ title: "E-books", href: "/" },
				{ title: "Community Forum", href: "/" },
				{ title: "Release Notes", href: "/" },
				{ title: "System Status", href: "/" }
			]
		},
		{
			label: "Company",
			links: [
				{ title: "About Us", href: "/" },
				{ title: "Leadership", href: "/" },
				{ title: "Careers", href: "/" },
				{ title: "Press", href: "/" },
				{ title: "Sustainability", href: "/" },
				{ title: "Diversity & Inclusion", href: "/" },
				{ title: "Investor Relations", href: "/" },
				{ title: "Partners", href: "/" },
				{ title: "Legal & Compliance", href: "/" },
				{ title: "Privacy Policy", href: "/" },
				{ title: "Cookie Policy", href: "/" },
				{ title: "Terms of Service", href: "/" },
				{ title: "AML & KYC Policy", href: "/" }
			]
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="relative h-(--footer-height) w-full border-t [--footer-height:520px]"
	style="clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);"
>
	<div class="bottom-0 fixed h-(--footer-height) w-full">
		<div class="sticky top-[calc(100vh-var(--footer-height))] h-full overflow-y-auto">
			<div
				aria-hidden="true"
				class="inset-0 absolute isolate z-0 opacity-50 contain-strict dark:opacity-60"
			>
				<div
					class="top-0 left-0 h-320 w-140 -translate-y-87.5 absolute -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]"
				></div>
				<div
					class="top-0 left-0 h-320 w-60 absolute [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
				></div>
				<div
					class="top-0 left-0 h-320 w-60 -translate-y-87.5 absolute -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
				></div>
			</div>

			<div class="max-w-6xl gap-5 relative mx-auto flex size-full flex-col justify-between">
				<div class="gap-8 px-4 pt-12 md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1">
					<AnimatedContainer class="space-y-4 w-full">
						<Logo class="h-5 w-auto" />
						<p class="mt-8 text-sm md:mt-0 text-muted-foreground">
							Beautifully crafted shadcn blocks by efferd.
						</p>
						<div class="gap-2 flex">
							{#each socialLinks as link, index (`social-${link.href}-${index}`)}
								{@const SocialIcon = link.icon}
								<Button href={link.href} aria-label={link.title} size="icon-sm" variant="outline">
									<SocialIcon class="size-4" />
								</Button>
							{/each}
						</div>
					</AnimatedContainer>

					{#each footerLinkGroups as group, index (group.label)}
						<AnimatedContainer class="w-full" delay={0.1 + index * 0.1}>
							<div class="mb-10 md:mb-0">
								<h3 class="text-sm uppercase">{group.label}</h3>
								<ul class="mt-4 space-y-2 text-sm md:text-xs lg:text-sm text-muted-foreground">
									{#each group.links as link (link.title)}
										<li>
											<a
												class="[&_svg]:me-1 [&_svg]:size-4 inline-flex items-center hover:text-foreground"
												href={link.href}
											>
												{#if link.icon}
													{@const LinkIcon = link.icon}
													<LinkIcon />
												{/if}
												{link.title}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</AnimatedContainer>
					{/each}
				</div>

				<div
					class="gap-2 p-4 text-sm md:flex-row flex flex-col items-center justify-between border-t text-muted-foreground"
				>
					<p>&copy; {currentYear} efferd, All rights reserved.</p>
					<a class="hover:text-foreground" href="/">License</a>
				</div>
			</div>
		</div>
	</div>
</footer>
