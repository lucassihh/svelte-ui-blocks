<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	type BlogCard = {
		title: string;
		date: string;
		description: string;
	};

	type Props = BlogCard & HTMLAttributes<HTMLAnchorElement>;

	let { title, date, description, ...props }: Props = $props();
</script>

<a
	class={cn(
		"group h-24 gap-y-1 p-4 flex w-full flex-col justify-center hover:cursor-pointer hover:bg-accent/30 active:bg-accent dark:active:bg-accent/50"
	)}
	{...props}
>
	<div class="gap-2 relative flex items-end justify-center">
		<h3 class="text-lg font-medium md:text-xl whitespace-nowrap text-foreground">
			{title}
		</h3>
		<span class="mb-1.5 w-full border-b-2 border-dashed"></span>
		<span
			class="text-xs md:text-sm font-mono whitespace-nowrap text-muted-foreground uppercase group-hover:text-foreground"
		>
			{date}
		</span>
	</div>
	<div
		class="max-w-sm text-sm md:max-w-full md:text-base text-muted-foreground group-hover:text-foreground"
	>
		{description}
	</div>
</a>
