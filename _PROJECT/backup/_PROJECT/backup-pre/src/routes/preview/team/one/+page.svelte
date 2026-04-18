<script lang="ts">
	import { team } from "$lib/config/blocks_main/team";

	const block = team.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in team");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
