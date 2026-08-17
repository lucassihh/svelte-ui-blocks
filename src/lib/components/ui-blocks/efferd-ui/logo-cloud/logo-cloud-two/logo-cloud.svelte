<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import LogoCard from "./logo-card.svelte";
</script>

<div class="md:grid-cols-4 grid grid-cols-2 border">
	<LogoCard
		class="relative border-r border-b bg-secondary dark:bg-secondary/30"
		logo={{
			src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
			alt: "Nvidia Logo"
		}}
	>
		<DecorIcon class="z-10" position="bottom-right" />
	</LogoCard>

	<LogoCard
		class="md:border-r border-b"
		logo={{
			src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
			alt: "Supabase Logo"
		}}
	/>

	<LogoCard
		class="md:bg-secondary dark:md:bg-secondary/30 relative border-r border-b"
		logo={{
			src: "https://storage.efferd.com/logo/github-wordmark.svg",
			alt: "GitHub Logo"
		}}
	>
		<DecorIcon class="z-10" position="bottom-right" />
		<DecorIcon class="md:block z-10 hidden" position="bottom-left" />
	</LogoCard>

	<LogoCard
		class="md:bg-background md:dark:bg-background relative border-b bg-secondary dark:bg-secondary/30"
		logo={{
			src: "https://storage.efferd.com/logo/openai-wordmark.svg",
			alt: "OpenAI Logo"
		}}
	/>

	<LogoCard
		class="md:border-b-0 md:bg-background md:dark:bg-background relative border-r border-b bg-secondary dark:bg-secondary/30"
		logo={{
			src: "https://storage.efferd.com/logo/turso-wordmark.svg",
			alt: "Turso Logo"
		}}
	>
		<DecorIcon class="md:hidden z-10" position="bottom-right" />
	</LogoCard>

	<LogoCard
		class="md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30 border-b bg-background"
		logo={{
			src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
			alt: "Clerk Logo"
		}}
	/>

	<LogoCard
		class="border-r"
		logo={{
			src: "https://storage.efferd.com/logo/claude-wordmark.svg",
			alt: "Claude AI Logo"
		}}
	/>

	<LogoCard
		class="bg-secondary dark:bg-secondary/30"
		logo={{
			src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
			alt: "Vercel Logo"
		}}
	/>
</div>
