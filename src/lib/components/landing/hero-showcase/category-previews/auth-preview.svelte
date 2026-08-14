<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2">
	<div class="px-3 py-3 sm:px-4 sm:py-4 border-r">
		<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
		<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	</div>
	<div class="px-3 py-4 flex flex-col justify-center">
		<div class="mb-2 h-2 w-14 mx-auto rounded-full bg-muted-foreground/18"></div>
		<div class="mb-1.5 h-1.5 w-full rounded-full bg-muted-foreground/10"></div>
		<div class="mb-2 h-1.5 w-full rounded-full bg-muted-foreground/10"></div>
		<div class="h-4 w-full rounded-sm bg-primary/18"></div>
	</div>
</div>
