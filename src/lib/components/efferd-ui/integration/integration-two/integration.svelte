<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import IntegrationCardTwo from "./integration-card-two.svelte";

	type DecorPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

	type Integration = {
		src: string;
		name: string;
		description: string;
		isInvertable?: boolean;
		decorPosition?: DecorPosition;
	};

	const data: Integration[] = [
		{
			src: "https://storage.efferd.com/logo/vercel.svg",
			name: "Vercel",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem....",
			isInvertable: true
		},
		{
			src: "https://storage.efferd.com/logo/openai.svg",
			name: "OpenAI",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem....",
			isInvertable: true,
			decorPosition: "bottom-left"
		},
		{
			src: "https://storage.efferd.com/logo/supabase.svg",
			name: "Supabase",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem...."
		},
		{
			src: "https://storage.efferd.com/logo/github.svg",
			name: "GitHub",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem....",
			isInvertable: true
		},
		{
			src: "https://storage.efferd.com/logo/notion.svg",
			name: "Notion",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem...."
		},
		{
			src: "https://storage.efferd.com/logo/gmail.svg",
			name: "Gmail",
			description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem....",
			decorPosition: "top-left"
		}
	];
</script>

<div class="max-w-5xl relative mx-auto border">
	<div class="md:grid-cols-3 grid grid-cols-2 gap-px bg-border">
		{#each data as item (item.name)}
			<IntegrationCardTwo integration={item} />
		{/each}
	</div>

	<DecorIcon position="top-left" />
	<DecorIcon position="top-right" />
	<DecorIcon position="bottom-left" />
	<DecorIcon position="bottom-right" />
</div>
