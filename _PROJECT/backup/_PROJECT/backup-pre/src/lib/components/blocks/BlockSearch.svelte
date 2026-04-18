<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Command from "$lib/components/ui/command/index";
	import { search_data } from "$lib/config/search_data.ts";
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	let open = $state(false);

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = true;
			}
		}
		document.addEventListener("keydown", handleKeydown);

		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}
</script>


<!-- Block Search -->
<Button
	variant="outline"
	class={cn("rounded-lg text-muted-foreground w-[5rem]")}
	onclick={() => (open = true)}
	size="sm"
>
	<span class="hidden lg:inline-flex">Search Component.. </span>
	<span class="inline-flex lg:hidden">Search...</span>
</Button>


<Command.Dialog bind:open class="rounded-none">
	<Command.Input placeholder="Type a component name.." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#each search_data as navItem}
			<Command.Group heading={navItem.name}>
				{#each navItem.subcom as item}
					<Command.Item
						class="capitalize"
						value={item.name}
						onSelect={() =>
							runCommand(() => {
								item.href && goto(item.href);
							})}
					>
						{item.name}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>