<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { cn } from "$lib/utils";
	import IntegrationCardThree from "./integration-card-three.svelte";

	type LogoType = {
		src: string;
		alt: string;
	};

	type TileData = {
		row: number;
		col: number;
		logo?: LogoType;
	};

	const tiles: TileData[] = [
		{
			row: 0,
			col: 1,
			logo: {
				src: "https://storage.efferd.com/logo/vercel.svg",
				alt: "Vercel Logo"
			}
		},
		{
			row: 0,
			col: 3,
			logo: {
				src: "https://storage.efferd.com/logo/openai.svg",
				alt: "OpenAI Logo"
			}
		},
		{ row: 1, col: 0 },
		{
			row: 1,
			col: 2,
			logo: {
				src: "https://storage.efferd.com/logo/cursor.svg",
				alt: "Cursor Logo"
			}
		},
		{
			row: 1,
			col: 4,
			logo: {
				src: "https://storage.efferd.com/logo/v0.svg",
				alt: "V0 Logo"
			}
		},
		{
			row: 2,
			col: 1,
			logo: {
				src: "https://storage.efferd.com/logo/planetscale.svg",
				alt: "Planetscale Logo"
			}
		},
		{ row: 2, col: 3 },
		{ row: 3, col: 0 },
		{
			row: 3,
			col: 2,
			logo: {
				src: "https://storage.efferd.com/logo/base-ui.svg",
				alt: "Base UI Logo"
			}
		},
		{
			row: 3,
			col: 4,
			logo: {
				src: "https://storage.efferd.com/logo/copilot.svg",
				alt: "Copilot Logo"
			}
		},
		{
			row: 4,
			col: 1,
			logo: {
				src: "https://storage.efferd.com/logo/github.svg",
				alt: "GitHub Logo"
			}
		},
		{
			row: 4,
			col: 3,
			logo: {
				src: "https://storage.efferd.com/logo/dub.svg",
				alt: "Dub Logo"
			}
		}
	];
</script>

<div
	class="max-w-4xl gap-12 md:grid-cols-2 md:items-center relative mx-auto grid grid-cols-1 border-x"
>
	<FullWidthDivider class="-top-px" />

	<div class="p-4 md:p-6">
		<div class="space-y-4">
			<h2 class="text-3xl font-medium tracking-tight sm:text-4xl text-foreground">
				Connect with your favorite tools
			</h2>
			<p class="text-sm md:text-base text-muted-foreground">
				Connect your favorite tools with our growing library of integrations.
			</p>
			<Button size="sm" href="/">Explore integrations</Button>
		</div>
	</div>

	<div class="place-items-end">
		<div class="size-80 relative">
			<div
				class={cn(
					"inset-0 absolute size-full",
					"bg-[linear-gradient(to_right,theme(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,theme(--color-border)_1px,transparent_1px)]",
					"bg-size-[64px_64px]",
					"mask-[radial-gradient(ellipse_at_center,black,black,transparent)]"
				)}
			></div>

			{#each tiles as tile (`${tile.row}_${tile.col}`)}
				<IntegrationCardThree {...tile} />
			{/each}
		</div>
	</div>

	<FullWidthDivider class="-bottom-px" />
</div>
