<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="gap-3 px-3 py-3 sm:px-4 sm:py-4 flex h-full flex-col justify-center">
	<div class="text-center">
		<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
		<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	</div>
	<div class="grid grid-cols-3">
		{#each Array(3) as _, index}
			<div
				class:border-r={index < 2}
				class="gap-1.5 py-2 flex flex-col items-center justify-center border-border/70"
			>
				<div class="size-3 rounded-full bg-primary/18"></div>
				<div class="h-1.5 w-5 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-9 rounded-full bg-muted-foreground/14"></div>
			</div>
		{/each}
	</div>
</div>
