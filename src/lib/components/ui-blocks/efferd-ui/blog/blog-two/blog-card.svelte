<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type BlogCard = {
		title: string;
		date: string;
		description: string;
		category: string;
		author: string;
		href: string;
	};

	type Props = BlogCard & HTMLAttributes<HTMLAnchorElement>;

	let {
		title,
		date,
		description,
		category,
		author,
		class: className = "",
		...props
	}: Props = $props();
</script>

<a
	class={cn(
		"group px-6 py-12 md:px-8 w-full bg-background text-muted-foreground hover:cursor-pointer hover:text-foreground active:bg-accent active:dark:bg-accent/50",
		className
	)}
	{...props}
>
	<h3 class="mb-3 text-lg font-medium md:text-xl line-clamp-2 text-foreground">
		{title}
	</h3>
	<div class="mb-3 gap-2 flex items-center">
		<span class="text-xs text-muted-foreground group-hover:text-foreground">
			{category}
		</span>
		<div class="size-1 inline-flex rounded-full bg-muted-foreground"></div>
		<span class="text-xs text-muted-foreground group-hover:text-foreground">
			{date}
		</span>
	</div>
	<p
		class="mb-8 text-sm tracking-wide line-clamp-3 text-muted-foreground group-hover:text-foreground"
	>
		{description}
	</p>
	<div class="gap-1.5 flex items-center">
		by
		<span
			class="text-xs font-medium md:text-sm font-mono text-foreground/80 group-hover:text-foreground"
		>
			{author}
		</span>
	</div>
</a>
