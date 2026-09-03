<script lang="ts">
	import { GlyphMatrix } from "$lib/components/ui/magic-ui/glyph-matrix";
	import { mode } from "mode-watcher";
</script>

<div class="relative h-100 w-full overflow-hidden rounded-lg bg-background">
	<GlyphMatrix
		glyphs="01·•+*/\<>="
		cellSize={14}
		mutationRate={0.04}
		interval={90}
		fadeBottom={0.6}
		color={mode.current === "dark" ? "#4FFF92" : "#000000"}
		boost={1}
	/>
</div>
