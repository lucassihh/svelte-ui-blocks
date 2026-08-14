<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div
	class="px-3 py-3 sm:px-4 sm:py-4 relative flex h-full flex-col items-center justify-center text-center"
>
	<div
		class="inset-y-0 left-4 absolute w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
	<div
		class="inset-y-0 right-4 absolute w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
	<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
	<p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
	<p class="mt-0.5 leading-4 text-[11px] text-muted-foreground">{countLabel}</p>
	<div class="mt-3 gap-2 grid grid-cols-2">
		<div class="h-4 w-12 rounded-sm bg-muted-foreground/14"></div>
		<div class="h-4 w-12 rounded-sm bg-primary/18"></div>
	</div>
</div>
