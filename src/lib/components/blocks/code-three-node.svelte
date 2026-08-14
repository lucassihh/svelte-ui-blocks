<script lang="ts">
	// Local Imports
	import type { BlockCodeNode } from "./blocks-code-three";
	import CodeTreeNode from "./code-three-node.svelte";

	// Hooks & Other
	import { cn } from "$lib/utils";
	import { slide } from "svelte/transition";

	// Icons
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import FileCode2 from "@lucide/svelte/icons/file-code-2";
	import Folder from "@lucide/svelte/icons/folder";
	import FolderOpen from "@lucide/svelte/icons/folder-open";

	// Props Types
	interface CodeTreeNodeProps {
		node: BlockCodeNode;
		activeFileId: string;
		openFolderIds: Set<string>;
		onSelectFile: (fileId: string) => void;
		onToggleFolder: (folderId: string) => void;
	}

	// Props
	let { node, activeFileId, openFolderIds, onSelectFile, onToggleFolder }: CodeTreeNodeProps =
		$props();

	let isOpen = $derived(node.type === "folder" ? openFolderIds.has(node.id) : false);
	let isExternalOnlyFile = $derived(
		node.type === "file" && Boolean(node.externalUrl) && !node.code
	);
</script>

{#if node.type === "folder"}
	<div>
		<button
			type="button"
			class="gap-2 px-2 py-1.5 text-xs flex w-full items-center rounded-md text-left text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
			onclick={() => onToggleFolder(node.id)}
		>
			<span class="w-4 flex shrink-0 items-center justify-center">
				<!-- {#if isOpen}
					<ChevronDown class="size-3.5" />
				{:else}
					<ChevronRight class="size-3.5" />
					{/if} -->
				<ChevronRight
					class={[
						"size-3.5 ease-out transition duration-150",
						isOpen ? "rotate-90 text-foreground/80" : "text-foreground/60"
					]}
				/>
			</span>
			{#if isOpen}
				<FolderOpen class="size-3.5 text-foreground/80" />
			{:else}
				<Folder class="size-3.5 text-foreground/80" />
			{/if}
			<span class="truncate">{node.name}</span>
		</button>

		{#if isOpen}
			<div transition:slide={{ duration: 180 }} class="ml-4 pl-1.5 border-l border-border/60">
				{#each node.children as child (child.id)}
					<CodeTreeNode
						node={child}
						{activeFileId}
						{openFolderIds}
						{onSelectFile}
						{onToggleFolder}
					/>
				{/each}
			</div>
		{/if}
	</div>
{:else if isExternalOnlyFile}
	<a
		href={node.externalUrl}
		target="_blank"
		rel="noreferrer"
		aria-label={`Open ${node.externalLabel ?? node.name}`}
		class="gap-1 text-xs flex items-center rounded-md text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
	>
		<span class="w-4 shrink-0"></span>
		<FileCode2 class="size-3.5 text-sky-500 shrink-0" />
		<span class="min-w-0 py-1.5 flex-1 truncate">{node.name}</span>
		<span class="mr-2 size-7 inline-flex shrink-0 items-center justify-center rounded-md">
			<ExternalLink class="size-3.5" />
		</span>
	</a>
{:else}
	<div
		class={cn(
			"gap-1 text-xs flex items-center rounded-md transition-colors",
			activeFileId === node.id
				? "shadow-sm bg-accent text-foreground"
				: "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
		)}
	>
		<button
			type="button"
			class="min-w-0 gap-2 px-2 py-1.5 flex flex-1 items-center text-left"
			onclick={() => onSelectFile(node.id)}
		>
			<span class="w-4 shrink-0"></span>
			<FileCode2 class="size-3.5 text-sky-500 shrink-0" />
			<span class="truncate">{node.name}</span>
		</button>

		{#if node.externalUrl}
			<a
				href={node.externalUrl}
				target="_blank"
				rel="noreferrer"
				aria-label={`Open ${node.externalLabel ?? node.name}`}
				class="mr-2 size-7 inline-flex shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
			>
				<ExternalLink class="size-3.5" />
			</a>
		{/if}
	</div>
{/if}
