<script lang="ts">
	import * as NavigationMenu from "$lib/components/ui/navigation-menu/index";
	import type { HTMLAttributes } from "svelte/elements";
	import LinkItem from "./link-item.svelte";
	import { companyLinks, companyLinks2, productLinks } from "./nav-links";

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

<NavigationMenu.Root class="md:flex hidden">
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger class="bg-transparent">Product</NavigationMenu.Trigger>
			<NavigationMenu.Content class="NavigationMenuContent p-0">
				<div class="p-1 pr-1.5 bg-muted/50 dark:bg-background">
					<div class="w-lg gap-2 p-2 shadow grid grid-cols-2 rounded-lg border bg-popover">
						{#each productLinks as item, i}
							<NavigationMenu.Link>
								<LinkItem {...item} />
							</NavigationMenu.Link>
						{/each}
					</div>
					<div class="p-2">
						<p class="text-sm text-muted-foreground">
							Interested?{" "}
							<a class="font-medium text-foreground hover:underline" href="/"> Schedule a demo </a>
						</p>
					</div>
				</div>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger class="bg-transparent">Company</NavigationMenu.Trigger>
			<NavigationMenu.Content class="p-0">
				<div class="p-1 pr-1.5 pb-1.5 bg-muted/50 dark:bg-background">
					<div class="w-lg gap-2 grid grid-cols-2">
						<div class="space-y-2 p-2 shadow rounded-lg border bg-popover">
							{#each companyLinks as item, i}
								<NavigationMenu.Link>
									<LinkItem {...item} />
								</NavigationMenu.Link>
							{/each}
						</div>
						<div class="space-y-2 p-3">
							{#each companyLinks2 as item, i}
								{@const IconComp = item.icon}
								<NavigationMenu.Link>
									<div class="gap-2 flex items-center">
										<IconComp />
										{item.label}
									</div>
								</NavigationMenu.Link>
							{/each}
						</div>
					</div>
				</div>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link class="p-2 px-4 rounded-md hover:bg-accent">
				{#snippet child({ props })}
					<a href="/documentation" {...props}>Docs</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
