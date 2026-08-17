<script lang="ts">
	import AnimatedContainer from "./AnimatedContainer.svelte";
	import { cn } from "$lib/utils";

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

	type FooterSection = {
		label: string;
		links: FooterLink[];
	};

	const footerLinks: FooterSection[] = [
		{
			label: "Product",
			links: [
				{ title: "Features", href: "/" },
				{ title: "Pricing", href: "/" },
				{ title: "Testimonials", href: "/" },
				{ title: "Integration", href: "/" }
			]
		},
		{
			label: "Company",
			links: [
				{ title: "FAQs", href: "/" },
				{ title: "About Us", href: "/" },
				{ title: "Privacy Policy", href: "/" },
				{ title: "T&S", href: "/" }
			]
		},
		{
			label: "Resources",
			links: [
				{ title: "Blog", href: "/" },
				{ title: "Changelog", href: "/" },
				{ title: "Brand", href: "/" },
				{ title: "Help", href: "/" }
			]
		},
		{
			label: "Social Links",
			links: [
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
			]
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class={cn(
		"md:rounded-t-6xl max-w-5xl rounded-t-4xl px-6 md:px-8 relative mx-auto flex w-full flex-col items-center justify-center border-t",
		"dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]"
	)}
>
	<div
		class="top-0 blur absolute right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20"
	></div>

	<div class="gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8 grid w-full">
		<AnimatedContainer class="space-y-4">
			<Logo class="h-4 w-auto" />
			<p class="mt-8 text-sm md:mt-0 text-muted-foreground">Beautify your app with efferd.</p>
		</AnimatedContainer>

		<div class="mt-10 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0 grid grid-cols-2">
			{#each footerLinks as section, index (section.label)}
				<AnimatedContainer delay={0.1 + index * 0.1}>
					<div class="mb-10 md:mb-0">
						<h3 class="text-xs">{section.label}</h3>
						<ul class="mt-4 space-y-2 text-sm text-muted-foreground">
							{#each section.links as link (`${section.label}-${link.title}`)}
								<li>
									<a
										class="[&_svg]:me-1 [&_svg]:size-4 inline-flex items-center duration-250 hover:text-foreground"
										href={link.href}
										rel={link.icon ? "noreferrer" : undefined}
										target={link.icon ? "_blank" : undefined}
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
	</div>

	<div class="h-px w-full bg-linear-to-r via-border"></div>

	<div class="py-4 flex w-full items-center justify-center">
		<p class="text-sm text-muted-foreground">
			&copy; {currentYear} efferd, All rights reserved
		</p>
	</div>
</footer>
