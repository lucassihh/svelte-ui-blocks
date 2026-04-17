<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import SheetPortal from "./sheet-portal.svelte";
	import SheetOverlay from "./sheet-overlay.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import XIcon from "@lucide/svelte/icons/x";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import type { ComponentProps } from "svelte";
	let {
		ref = $bindable(null),
		class: className,
		side = "right",
		showCloseButton = true,
		portalProps,
		children,
		...restProps
	}: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & {
		portalProps?: WithoutChildrenOrChild<ComponentProps<typeof SheetPortal>>;
		side?: "top" | "bottom" | "left" | "right";
		showCloseButton?: boolean;
		children: Snippet;
	} = $props();
</script>

<SheetPortal {...portalProps}>
	<SheetOverlay />
	<SheetPrimitive.Content
		bind:ref
		data-slot="sheet-content"
		data-side={side}
		class={cn(
			// base & layout
			"fixed z-50 flex flex-col gap-4 bg-popover text-sm text-popover-foreground shadow-lg",

			// Animation By CSS
			"sheet-content",

			// Positions
			"data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-[18rem] data-[side=left]:rounded-r-xl data-[side=left]:border-r",
			"data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-[18rem] data-[side=right]:rounded-l-xl data-[side=right]:border-l",
			"data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-fit data-[side=top]:rounded-b-xl data-[side=top]:border-b",
			"data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-fit data-[side=bottom]:rounded-t-xl data-[side=bottom]:border-t",

			className
		)}
		{...restProps}
	>
		{@render children?.()}

		<!-- Close Btn -->
		{#if showCloseButton}
			<SheetPrimitive.Close data-slot="sheet-close">
				{#snippet child({ props })}
					<Button
						variant="secondary"
						class="absolute top-3 right-3"
						size="icon-sm"
						{...props}
					>
						<XIcon />
						<span class="sr-only">Close</span>
					</Button>
				{/snippet}
			</SheetPrimitive.Close>
		{/if}
	</SheetPrimitive.Content>
</SheetPortal>

<style>
	/* Sidebar Shadcn-svelte (Sheet) - Animation */
	/* Settings Variables */
	:global(:root) {
		--sheet-duration: 500ms;
		--sheet-ease: cubic-bezier(0.22, 1, 0.36, 1);

		/* Overlay */
		--overlay-duration: 50ms;
		--overlay-ease: cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* Overlay */
	:global(.overlayShow[data-state="open"]) {
		opacity: 1;
		transition-delay: 50ms;
	}
	:global(.overlayShow[data-state="closed"]) {
		opacity: 0;
	}

	/* Fades  */
	@keyframes fadeShow {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeHide {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* Sheet Content */
	:global(.sheet-content) {
		will-change: transform;
		backface-visibility: hidden;
		transition: transform var(--sheet-duration) var(--sheet-ease);
	}

	/* Content State */
	:global(.sheet-content[data-state="open"][data-side="right"]) {
		animation: sheetEnterRight var(--sheet-duration) var(--sheet-ease);
	}
	:global(.sheet-content[data-state="open"][data-side="left"]) {
		animation: sheetEnterLeft var(--sheet-duration) var(--sheet-ease);
	}
	:global(.sheet-content[data-state="open"][data-side="top"]) {
		animation: sheetEnterTop var(--sheet-duration) var(--sheet-ease);
	}
	:global(.sheet-content[data-state="open"][data-side="bottom"]) {
		animation: sheetEnterBottom var(--sheet-duration) var(--sheet-ease);
	}
	/* Initial State */
	:global(.sheet-content[data-side="right"]) {
		transform: translate3d(100%, 0, 0);
	}
	:global(.sheet-content[data-side="left"]) {
		transform: translate3d(-100%, 0, 0);
	}
	:global(.sheet-content[data-side="top"]) {
		transform: translate3d(0, -100%, 0);
	}
	:global(.sheet-content[data-side="bottom"]) {
		transform: translate3d(0, 100%, 0);
	}

	/* Sidebar - Open */
	:global(.sheet-content[data-state="open"][data-side="right"]),
	:global(.sheet-content[data-state="open"][data-side="left"]),
	:global(.sheet-content[data-state="open"][data-side="top"]),
	:global(.sheet-content[data-state="open"][data-side="bottom"]) {
		transform: translate3d(0, 0, 0);
	}

	/* Sidebar - Closed */
	:global(.sheet-content[data-state="closed"][data-side="right"]) {
		transform: translate3d(100%, 0, 0);
	}
	:global(.sheet-content[data-state="closed"][data-side="left"]) {
		transform: translate3d(-100%, 0, 0);
	}
	:global(.sheet-content[data-state="closed"][data-side="top"]) {
		transform: translate3d(0, -100%, 0);
	}
	:global(.sheet-content[data-state="closed"][data-side="bottom"]) {
		transform: translate3d(0, 100%, 0);
	}

	/* Open Keyframes */
	@keyframes sheetEnterRight {
		from {
			transform: translate3d(100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes sheetEnterLeft {
		from {
			transform: translate3d(-100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes sheetEnterTop {
		from {
			transform: translate3d(0, -100%, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes sheetEnterBottom {
		from {
			transform: translate3d(0, 100%, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
