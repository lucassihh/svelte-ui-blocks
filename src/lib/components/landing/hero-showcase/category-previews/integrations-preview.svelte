<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="px-3 py-3 sm:px-4 sm:py-4 grid h-full grid-cols-2 place-content-center">
	<div class="flex items-center">
		<div>
			<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
			<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
			<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
		</div>
	</div>
	<div class="size-20 relative mx-auto">
		<div
			class="inset-0 size-7 absolute z-20 m-auto rounded-full border border-border bg-card"
		></div>
		<div
			class="top-0 left-0 size-4 absolute z-20 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="top-0 right-0 size-4 absolute z-20 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="bottom-0 left-0 size-4 absolute z-20 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="right-0 bottom-0 size-4 absolute z-20 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border/80"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border/80"
		></div>
	</div>
</div>
