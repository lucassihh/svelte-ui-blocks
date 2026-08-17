<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	// SVG
	import GithubLogo from "$lib/assets/svg/social/github.svelte";
	import XLogo from "$lib/assets/svg/social/x.svelte";

	import { cn } from "$lib/utils";
	import { Mail, MapPin, Phone, type Icon as IconType } from "@lucide/svelte";
	import type { Component } from "svelte";

	const APP_EMAIL = "mail@example.com";
	const APP_PHONE = "+92 300 1234567";
	const APP_PHONE_2 = "+92 321 9876543";

	type ContactItem = {
		title: string;
		description: string;
		icon: typeof IconType;
		content: {
			type: "link" | "text";
			label: string;
			href?: string;
		}[];
	};

	type SocialLink = {
		icon: Component;
		href: string;
		label: string;
	};

	const contactItems: ContactItem[] = [
		{
			title: "Email",
			description: "We respond to all emails within 24 hours.",
			icon: Mail,
			content: [
				{
					type: "link",
					label: APP_EMAIL,
					href: `mailto:${APP_EMAIL}`
				}
			]
		},
		{
			title: "Office",
			description: "Drop by our office for a chat.",
			icon: MapPin,
			content: [
				{
					type: "text",
					label: "Office # 123, Main Street, Texas, USA"
				}
			]
		},
		{
			title: "Phone",
			description: "We're available Mon-Fri, 9am-5pm.",
			icon: Phone,
			content: [
				{
					type: "link",
					label: APP_PHONE,
					href: `tel:${APP_PHONE}`
				},
				{
					type: "link",
					label: APP_PHONE_2,
					href: `tel:${APP_PHONE_2}`
				}
			]
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: GithubLogo,
			href: "/",
			label: "GitHub"
		},
		{
			icon: XLogo,
			href: "/",
			label: "Twitter"
		}
	];
</script>

<div class="max-w-5xl relative mx-auto min-h-screen overflow-x-clip border-x">
	<div class="px-4 py-18 md:items-center flex grow flex-col justify-center">
		<h1 class="text-4xl font-bold md:text-5xl">Contact Us</h1>
		<p class="mb-5 text-base text-muted-foreground">Contact the support team at efferd.</p>
	</div>

	<FullWidthDivider />

	<div class="md:grid-cols-3 grid">
		{#each contactItems as item, index}
			{@const Icon = item.icon}
			<div
				class={cn(
					"md:border-r md:border-b-0 flex flex-col justify-between border-b",
					index === contactItems.length - 1 && "md:border-r-0 border-b-0"
				)}
			>
				<div
					class={cn(
						"gap-x-3 p-4 flex items-center border-b bg-secondary/50 dark:bg-secondary/20",
						"[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-muted-foreground"
					)}
				>
					<Icon />
					<h2 class="text-lg font-medium tracking-wider">{item.title}</h2>
				</div>

				<div class="gap-x-2 p-4 py-12 flex items-center">
					<div>
						{#each item.content as entry}
							{#if entry.type === "link"}
								<a
									class="text-sm font-medium tracking-wide block font-mono hover:underline"
									href={entry.href}
								>
									{entry.label}
								</a>
							{:else}
								<span class="text-sm font-medium tracking-wide font-mono">
									{entry.label}
								</span>
							{/if}
						{/each}
					</div>
				</div>

				<div class="p-4 border-t">
					<p class="text-sm text-muted-foreground">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<FullWidthDivider />

	<div class="gap-4 py-24 z-1 flex h-full flex-col items-center justify-center">
		<h2 class="text-2xl font-medium tracking-tight md:text-3xl text-center text-muted-foreground">
			Find us <span class="text-foreground">online</span>
		</h2>
		<div class="gap-2 flex flex-wrap items-center">
			{#each socialLinks as link}
				{@const Icon = link.icon}
				<a
					class="gap-x-2 px-3 py-1.5 shadow flex items-center rounded-full border bg-card hover:bg-accent"
					href={link.href}
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon class="size-3.5 text-muted-foreground" />
					<span class="text-xs font-medium tracking-wide font-mono">{link.label}</span>
				</a>
			{/each}
		</div>
	</div>
</div>
