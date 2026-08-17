<script lang="ts">
	import { Marquee } from "$lib/components/ui-blocks/magic-ui/marquee";

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

<div class="py-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]">
	<Marquee>
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
</div>
