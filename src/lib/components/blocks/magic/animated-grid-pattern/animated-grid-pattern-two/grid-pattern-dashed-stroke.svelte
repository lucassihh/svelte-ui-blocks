<script>
	import { GridPattern } from "$lib/components/ui/magic-ui/grid-pattern";
</script>

<div
	class="relative flex size-full items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-20"
>
	<GridPattern
		width={30}
		height={30}
		x={-1}
		y={-1}
		strokeDashArray={"4 2"}
		class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
	/>
</div>
