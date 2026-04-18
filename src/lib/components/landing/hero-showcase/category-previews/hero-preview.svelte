<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, description, countLabel }: Props = $props();
</script>

<div
	class="relative flex h-full flex-col items-center justify-center px-3 py-3 text-center sm:px-4 sm:py-4"
>
	<div
		class="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
	<div
		class="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
				<h1 class="font-heading text-sm font-semibold tracking-tight text-primary">{title}</h1>
            <p class="font-heading text-xs font-medium text-foreground/80">{description}</p>
		    <p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	<div class="mt-3 grid grid-cols-2 gap-2">
		<div class="h-4 w-12 rounded-sm bg-muted-foreground/14"></div>
		<div class="h-4 w-12 rounded-sm bg-primary/18"></div>
	</div>
</div>
