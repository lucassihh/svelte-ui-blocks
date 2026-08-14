<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="px-3 py-3 sm:px-4 sm:py-4 flex h-full flex-col items-center justify-center">
	<div class="pb-3 text-center">
		<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
		<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	</div>
	<div
		class="h-px w-full max-w-[55%] bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
	<div
		class="gap-2 py-2 flex w-full items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	>
		{#each Array(8) as _}
			<div class="h-3.5 w-11 rounded-xs shrink-0 bg-muted-foreground/10"></div>
		{/each}
	</div>
	<div
		class="h-px w-full bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
</div>
