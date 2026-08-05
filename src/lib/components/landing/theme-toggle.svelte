<script lang="ts">
	// UI
	import { Button } from "$lib/components/ui/button";

	// Icon
	import { MoonIcon, SunIcon } from "@lucide/svelte";

	// For Theme
	import { mode, toggleMode } from "mode-watcher";
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}
</script>

<!-- ThemeToggle Btn -->
<div>
	<Button
		aria-label={themeLabel()}
		size="icon-sm"
		title={themeLabel()}
		variant="secondary"
		onclick={toggleMode}
	>
		{#if mode.current === "dark"}
			<SunIcon class="size-4" />
		{:else}
			<MoonIcon class="size-4" />
		{/if}
	</Button>
</div>
