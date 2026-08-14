<script lang="ts">
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

<div class="shadow md:grid-cols-4 grid grid-cols-2 rounded-lg bg-border">
	{#each logos as logo, i}
		<div class="p-8 flex items-center justify-center rounded-lg border bg-background">
			<img
				alt={logo.alt}
				class="h-4 md:h-5 pointer-events-none block select-none dark:brightness-0 dark:invert"
				height="auto"
				loading="lazy"
				src={logo.src}
				width="auto"
			/>
		</div>
	{/each}
</div>
