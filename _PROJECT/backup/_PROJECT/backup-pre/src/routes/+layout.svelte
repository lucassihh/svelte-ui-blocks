<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../styles/app.css";

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
