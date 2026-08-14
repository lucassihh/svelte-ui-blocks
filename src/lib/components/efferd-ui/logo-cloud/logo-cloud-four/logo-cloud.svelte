<script lang="ts">
	import { Marquee } from "$lib/components/magic-ui/marquee";
	import { ProgressiveBlur } from "$lib/components/ui/progressive-blur";

	const logos = [
		{
			src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
			alt: "Nvidia Logo"
		},
		{
			src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
			alt: "Supabase Logo"
		},
		{
			src: "https://storage.efferd.com/logo/openai-wordmark.svg",
			alt: "OpenAI Logo"
		},
		{
			src: "https://storage.efferd.com/logo/turso-wordmark.svg",
			alt: "Turso Logo"
		},
		{
			src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
			alt: "Vercel Logo"
		},
		{
			src: "https://storage.efferd.com/logo/github-wordmark.svg",
			alt: "GitHub Logo"
		},
		{
			src: "https://storage.efferd.com/logo/claude-wordmark.svg",
			alt: "Claude AI Logo"
		},
		{
			src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
			alt: "Clerk Logo"
		}
	];
</script>

<div
	class="py-6 relative border-x border-y bg-linear-to-r from-secondary/50 via-transparent to-secondary/50"
>
	<Marquee class="gap-20 flex items-center" style="--duration: 30s; --gap: 2rem;">
		{#each logos as logo}
			<img
				alt={logo.alt}
				class="h-4 md:h-5 pointer-events-none select-none dark:brightness-0 dark:invert"
				height="auto"
				loading="lazy"
				src={logo.src}
				width="auto"
			/>
		{/each}
	</Marquee>

	<ProgressiveBlur
		blurIntensity={1}
		class="top-0 left-0 md:w-[160px] pointer-events-none absolute h-full w-[100px]"
		direction="left"
	/>
	<ProgressiveBlur
		blurIntensity={1}
		class="top-0 right-0 md:w-[160px] pointer-events-none absolute h-full w-[100px]"
		direction="right"
	/>
</div>
