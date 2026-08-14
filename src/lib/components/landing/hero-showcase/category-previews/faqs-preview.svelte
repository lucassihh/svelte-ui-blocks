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
	<div class="flex items-center">
		<div class="w-full border-t border-border/70">
			<div class="h-6 px-2 flex items-center border-b border-border/70">
				<div class="h-1.5 w-2/3 rounded-full bg-muted-foreground/18"></div>
			</div>
			<div class="h-6 px-2 flex items-center border-b border-border/70">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
			</div>
			<div class="h-14 gap-1.5 px-2 py-2 flex flex-col border-b border-border/70 bg-card">
				<div class="h-1.5 w-3/4 rounded-full bg-primary/18"></div>
				<div class="h-1 w-full rounded-full bg-muted-foreground/10"></div>
				<div class="h-1 w-full rounded-full bg-muted-foreground/10"></div>
				<div class="h-1 w-5/6 rounded-full bg-muted-foreground/10"></div>
			</div>
		</div>
	</div>
</div>
