<script lang="ts">
	import { cn } from "$lib/utils";
	import { Button } from "$lib/components/ui/button";
	import XLogo from "$lib/assets/svg/social/x.svelte";
	import { Mail, Users, type Icon as IconType } from "@lucide/svelte";
	import type { Component } from "svelte";

	const APP_EMAIL = "mail@example.com";

	type Data = {
		title: string;
		description: string;
		icon: typeof IconType | Component;
		href: string;
		label: string;
	};
	let data: Data[] = [
		{
			title: "Email Us",
			description: "We respond to all emails within 24 hours.",
			icon: Mail,
			href: `mailto:${APP_EMAIL}`,
			label: APP_EMAIL
		},
		{
			title: "Send us DM",
			description: "Send us a direct message on X for quick answers.",
			icon: XLogo,
			href: "/",
			label: "@efferdui"
		},
		{
			title: "Join the community",
			description: "Join our community to connect with other users.",
			icon: Users,
			href: "/",
			label: "Join Discord"
		}
	];
</script>

<div class="max-w-4xl mx-auto">
	<div class="mb-12 max-w-md gap-2 flex flex-col justify-center">
		<h1 class="text-2xl font-bold md:text-3xl">Contact Us</h1>
		<p class="text-base text-muted-foreground">
			We&apos;re here to help and answer any question you might have, We look forward to hearing
			from you.
		</p>
	</div>
	<div
		class="gap-0.5 p-0.5 md:grid-cols-3 grid overflow-hidden rounded-lg bg-muted dark:bg-muted/50"
	>
		{#each data as item}
			{@const Icon = item.icon}
			<div class="gap-3 px-6 py-6 shadow-xs flex flex-col rounded-lg bg-background">
				<div
					class={cn("gap-x-2 flex items-center", "[&_svg]:size-4 [&_svg]:text-muted-foreground")}
				>
					<Icon />
					<h2 class="text-sm">{item.title}</h2>
				</div>
				<p class="text-sm text-muted-foreground">{item.description}</p>
				<div class="mt-1 gap-x-2 flex items-center">
					<Button variant="link" href={item.href}>
						{item.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
</div>
