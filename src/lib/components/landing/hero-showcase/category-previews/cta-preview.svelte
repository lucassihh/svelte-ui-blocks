<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="gap-2 flex h-full flex-col items-center justify-center">
	<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
	<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
	<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	<div class="px-3 py-1.5 w-full border-y border-border/70">
		<div class="grid grid-cols-2 border-x border-border/70">
			<div class="px-2 flex items-center border-r border-border/70">
				<p class="leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
			</div>
			<div class="gap-2 px-2 py-1.5 flex items-center">
				<div class="h-4 flex-1 rounded-sm bg-muted-foreground/16"></div>
				<div class="h-4 flex-1 rounded-sm bg-primary/18"></div>
			</div>
		</div>
	</div>
</div>
