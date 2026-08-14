<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="gap-2 px-3 py-3 sm:px-4 sm:py-4 flex h-full flex-col">
	<div>
		<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
		<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	</div>
	<div class="gap-2 grid flex-1 grid-cols-2">
		<div class="overflow-hidden rounded-sm border border-border/80 bg-background">
			<div class="h-8 w-full bg-card"></div>
			<div class="space-y-1 px-2 py-2 border-t border-border/70">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/14"></div>
			</div>
		</div>
		<div class="overflow-hidden rounded-sm border border-border/80 bg-background">
			<div class="h-8 w-full bg-card"></div>
			<div class="space-y-1 px-2 py-2 border-t border-border/70">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/14"></div>
			</div>
		</div>
	</div>
</div>
