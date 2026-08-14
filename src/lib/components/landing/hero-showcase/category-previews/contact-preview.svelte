<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="gap-3 px-3 py-3 sm:px-4 sm:py-4 grid h-full grid-cols-2">
	<div class="gap-2 flex flex-col justify-center">
		<div>
			<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
			<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
			<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
		</div>
		<div class="h-1.5 w-full rounded-full bg-muted-foreground/14"></div>
		<div class="h-1.5 w-full rounded-full bg-muted-foreground/14"></div>
	</div>
	<div class="gap-1.5 px-2.5 py-2 flex flex-col rounded-md border border-border/80 bg-background">
		<div class="h-1.5 w-8 rounded-full bg-muted-foreground/18"></div>
		<div class="h-3 w-full rounded-sm border border-border/70 bg-muted/10"></div>
		<div class="h-1.5 w-8 rounded-full bg-muted-foreground/18"></div>
		<div class="h-3 w-full rounded-sm border border-border/70 bg-muted/10"></div>
		<div class="h-4 mt-auto w-full rounded-sm bg-primary/18"></div>
	</div>
</div>
