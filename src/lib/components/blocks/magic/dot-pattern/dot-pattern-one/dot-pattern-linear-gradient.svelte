<script lang="ts">
	import { DotPattern } from "$lib/components/ui/magic-ui/dot-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="relative flex h-80 w-70 items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-20 md:min-w-2xl"
>
	<DotPattern
		width={20}
		height={20}
		cx={1}
		cy={1}
		cr={1}
		class={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
	/>
</div>
