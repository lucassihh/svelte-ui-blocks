<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { useAddButton } from "./add.svelte.js";
	import { cn } from "$lib/utils";
	import CheckIcon from "@lucide/svelte/icons/check";
	import AddAgentLogo from "./add-agent-logo.svelte";

	let { class: className, ...rest }: Omit<HTMLButtonAttributes, "onclick"> = $props();

	const buttonState = useAddButton();
</script>

<button
	type="button"
	class={cn(
		"min-w-0 md:pr-2 [&_svg]:size-3.5 flex flex-1 place-items-center rounded-l-md transition-colors hover:bg-accent",
		className
	)}
	{...rest}
	{...buttonState.props}
>
	<div class="size-9 flex items-center justify-center">
		<CheckIcon
			class={cn(
				"ease-out absolute scale-0 transition-all",
				buttonState.root.clipboard.copied && "scale-100"
			)}
		/>
		<AddAgentLogo
			agent={buttonState.root.agent}
			class={cn(
				"ease-out absolute scale-100 transition-all",
				buttonState.root.clipboard.copied && "scale-0"
			)}
		/>
	</div>
	<span
		class="pr-1 leading-4 md:w-60 md:flex-none md:pr-0 md:text-xs flex-1 overflow-hidden text-left font-mono text-[9px] text-nowrap break-all text-ellipsis select-text"
	>
		{buttonState.root.addCommand}
	</span>
</button>
