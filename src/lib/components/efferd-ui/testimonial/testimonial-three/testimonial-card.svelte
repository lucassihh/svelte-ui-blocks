<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";
	import { QuoteIcon } from "@lucide/svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company: string;
		image: string;
	};

	type Props = HTMLAttributes<HTMLElement> & {
		testimonial: Testimonial;
		class?: string;
		index?: number;
	};

	let { testimonial, class: className = "", index = 0, ...props }: Props = $props();
</script>

<figure
	class={cn(
		"gap-6 px-8 pt-8 pb-6 shadow-xs md:translate-y-[calc(3rem*var(--t-card-index))] relative flex flex-col justify-between",
		"dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
		className
	)}
	style={`--t-card-index: ${index}`}
	{...props}
>
	<div class="-inset-y-4 absolute -left-px w-px bg-border"></div>
	<div class="-inset-y-4 absolute -right-px w-px bg-border"></div>
	<div class="-inset-x-4 absolute -top-px h-px bg-border"></div>
	<div class="-right-4 -left-4 absolute -bottom-px h-px bg-border"></div>
	<DecorIcon class="size-3.5" position="top-left" />

	<blockquote class="gap-4 flex">
		<QuoteIcon aria-hidden="true" class="size-6 shrink-0 stroke-1" />

		<p class="text-base leading-relaxed font-normal flex-1 text-muted-foreground">
			{testimonial.quote}
		</p>
	</blockquote>

	<figcaption class="gap-3 flex items-center">
		<Avatar
			class="size-10 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background transition-shadow group-hover:ring-foreground/20"
		>
			<AvatarImage alt={`${testimonial.name}'s profile picture`} src={testimonial.image} />
			<AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
		</Avatar>
		<div class="flex flex-col">
			<cite class="text-sm font-medium text-foreground not-italic">
				{testimonial.name}
			</cite>
			<p class="text-xs text-muted-foreground">
				{testimonial.role}, <span class="text-foreground/80">{testimonial.company}</span>
			</p>
		</div>
	</figcaption>
</figure>
