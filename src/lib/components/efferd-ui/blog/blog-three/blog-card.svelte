<script lang="ts">
	import { AspectRatio } from "$lib/components/ui/aspect-ratio";
	import { cn } from "$lib/utils";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type BlogCard = {
		title: string;
		href: string;
		description: string;
		author: string;
		createdAt: string;
		readTime: string;
		image: string;
	};

	type Props = BlogCard & HTMLAnchorAttributes;

	const fallbackImage = "https://placehold.co/640x360?text=fallback-image";

	let {
		title,
		href,
		description,
		author,
		createdAt,
		readTime,
		image,
		class: className = "",
		...props
	}: Props = $props();

	let imageSrc = $state("");

	$effect(() => {
		imageSrc = image;
	});

	function handleImageError() {
		if (imageSrc !== fallbackImage) {
			imageSrc = fallbackImage;
		}
	}
</script>

<a
	{href}
	class={cn(
		"group gap-2 p-3 flex flex-col rounded-xl transition-colors hover:bg-muted/50 active:bg-muted",
		className
	)}
	{...props}
>
	<AspectRatio
		ratio={16 / 9}
		class="shadow-md overflow-hidden rounded-xl outline outline-offset-3 outline-border/50"
	>
		<img
			src={imageSrc}
			alt={title}
			loading="lazy"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			onerror={handleImageError}
		/>
	</AspectRatio>

	<div class="space-y-2 px-2 pb-2">
		<div
			class="gap-2 sm:text-xs flex flex-wrap items-center text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
		>
			<p>by {author}</p>
			<div class="size-1 rounded-full bg-current"></div>
			<p>{createdAt}</p>
			<div class="size-1 rounded-full bg-current"></div>
			<p>{readTime}</p>
		</div>

		<h2 class="text-lg font-semibold line-clamp-2">{title}</h2>
		<p
			class="text-sm line-clamp-3 text-muted-foreground transition-colors group-active:text-foreground"
		>
			{description}
		</p>
	</div>
</a>
