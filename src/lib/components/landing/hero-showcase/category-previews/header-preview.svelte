<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="gap-3 px-3 py-3 sm:px-4 sm:py-4 flex h-full flex-col">
	<div class="px-2 py-1.5 rounded-md border border-border/80 bg-card">
		<div class="gap-3 flex items-center justify-between">
			<div class="size-3 rounded-full bg-primary/18"></div>
			<div class="gap-1.5 flex">
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
			</div>
			<div class="h-3.5 w-10 rounded-sm bg-primary/18"></div>
		</div>
	</div>
	<div class="mt-auto text-center">
		<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
		<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	</div>
</div>
