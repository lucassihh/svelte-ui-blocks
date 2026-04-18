<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col items-center justify-center gap-2">
				<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
            <p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		    <p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	<div class="w-full border-y border-border/70 px-3 py-1.5">
		<div class="grid grid-cols-2 border-x border-border/70">
			<div class="flex items-center border-r border-border/70 px-2">
				<p class="text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
			</div>
			<div class="flex items-center gap-2 px-2 py-1.5">
				<div class="h-4 flex-1 rounded-sm bg-muted-foreground/16"></div>
				<div class="h-4 flex-1 rounded-sm bg-primary/18"></div>
			</div>
		</div>
	</div>
</div>
