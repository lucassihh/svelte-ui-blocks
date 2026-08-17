<script lang="ts">
	import LinkGroup from "./LinkGroup.svelte";
	import { cn } from "$lib/utils";
	import { ArrowRightIcon } from "@lucide/svelte";

	type LinkItem = {
		title: string;
		href: string;
	};

	type FooterColumn = {
		social: {
			title: string;
			href: string;
		};
		group: {
			title: string;
			links: LinkItem[];
		};
	};

	const columns: FooterColumn[] = [
		{
			social: { title: "Facebook", href: "https://facebook.com" },
			group: {
				title: "About Us",
				links: [
					{ title: "Pricing", href: "/" },
					{ title: "Testimonials", href: "/" },
					{ title: "FAQs", href: "/" },
					{ title: "Contact Us", href: "/" },
					{ title: "Blog", href: "/" }
				]
			}
		},
		{
			social: { title: "Youtube", href: "https://youtube.com" },
			group: {
				title: "Support",
				links: [
					{ title: "Help Center", href: "/" },
					{ title: "Terms", href: "/" },
					{ title: "Privacy", href: "/" },
					{ title: "Security", href: "/" },
					{ title: "Cookie Policy", href: "/" }
				]
			}
		},
		{
			social: { title: "Twitter", href: "https://x.com" },
			group: {
				title: "Community",
				links: [
					{ title: "Forum", href: "/" },
					{ title: "Events", href: "/" },
					{ title: "Partners", href: "/" },
					{ title: "Affiliates", href: "/" },
					{ title: "Career", href: "/" }
				]
			}
		},
		{
			social: { title: "Instagram", href: "https://instagram.com" },
			group: {
				title: "Press",
				links: [
					{ title: "Investors", href: "/" },
					{ title: "Terms of Use", href: "/" },
					{ title: "Privacy Policy", href: "/" },
					{ title: "Cookie Policy", href: "/" },
					{ title: "Legal", href: "/" }
				]
			}
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class={cn(
		"border-t",
		"dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.08),transparent)]"
	)}
>
	<div class="max-w-5xl px-4 relative mx-auto">
		<div class="md:grid-cols-4 md:divide-x relative grid grid-cols-1 border-x">
			{#each columns as column, index (column.social.title)}
				<div>
					<a
						href={column.social.href}
						class={cn(
							"p-2 text-sm md:border-t-0 flex items-center justify-between border-y hover:bg-muted dark:hover:bg-muted/50",
							index === 0 && "border-t-0"
						)}
					>
						<span class="font-medium">{column.social.title}</span>
						<ArrowRightIcon class="size-4" />
					</a>
					<LinkGroup title={column.group.title} links={column.group.links} />
				</div>
			{/each}
		</div>
	</div>

	<div class="p-3 flex justify-center border-t">
		<p class="text-xs text-muted-foreground">
			&copy; {currentYear} efferd, All rights reserved
		</p>
	</div>
</footer>
