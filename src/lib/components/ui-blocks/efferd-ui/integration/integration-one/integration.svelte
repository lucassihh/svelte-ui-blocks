<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import { ArrowUpRightIcon } from "@lucide/svelte";

	type Integration = {
		src: string;
		name: string;
		description: string;
		isInvertable?: boolean;
	};

	const data: Integration[] = [
		{
			src: "https://storage.efferd.com/logo/vercel.svg",
			name: "Vercel",
			description: "Amet praesentium deserunt ex commodi tempore fuga....",
			isInvertable: true
		},
		{
			src: "https://storage.efferd.com/logo/openai.svg",
			name: "OpenAI",
			description: "Amet praesentium deserunt ex commodi tempore fuga....",
			isInvertable: true
		},
		{
			src: "https://storage.efferd.com/logo/supabase.svg",
			name: "Supabase",
			description: "Amet praesentium deserunt ex commodi tempore fuga...."
		},
		{
			src: "https://storage.efferd.com/logo/notion.svg",
			name: "Notion",
			description: "Amet praesentium deserunt ex commodi tempore fuga...."
		}
	];
</script>

<div
	class={cn(
		"max-w-5xl gap-1 p-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto grid overflow-hidden rounded-md bg-secondary dark:bg-secondary/50"
	)}
>
	{#each data as item (item.name)}
		<div
			class={cn(
				"group gap-2 p-6 shadow-sm relative flex flex-col justify-between rounded-md bg-background"
			)}
		>
			<img
				alt={item.name}
				class={cn(
					"size-8 pointer-events-none shrink-0 object-contain select-none",
					item.isInvertable && "dark:invert"
				)}
				height="32"
				src={item.src}
				width="32"
			/>

			<div class="space-y-1">
				<h3 class="font-semibold">{item.name}</h3>
				<p class="text-xs md:text-sm text-muted-foreground">
					{item.description}
				</p>
			</div>
		</div>
	{/each}

	<div class="p-1 sm:col-span-2 lg:col-span-4 relative flex items-center justify-center">
		<Button href="/" class="group text-xs" size="sm" variant="link">
			View all integrations
			<ArrowUpRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
