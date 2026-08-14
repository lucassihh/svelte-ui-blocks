<script lang="ts">
	// Local Imports
	import {
		collectDefaultOpenFolderIds,
		findBlockCodeFile,
		flattenBlockCodeFiles,
		type BlockCodeTree
	} from "./blocks-code-three";
	import Code from "./code/code.svelte";
	import CodeTreeNode from "./code-three-node.svelte";

	// UI
	import Button from "../ui/button/button.svelte";

	// Icons
	import Check from "@lucide/svelte/icons/check";
	import Copy from "@lucide/svelte/icons/copy";
	import ExternalLink from "@lucide/svelte/icons/external-link";

	// Hooks & Other
	import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
	import { scale } from "svelte/transition";

	// CodeThree Props
	let { codeTree }: { codeTree: BlockCodeTree } = $props();

	let clipboard = new UseClipboard({ delay: 1500 });
	let openFolderIds = $state(new Set<string>());
	let activeFileId = $state("");
	let files = $derived(flattenBlockCodeFiles(codeTree.nodes));
	let fallbackFileId = $derived(codeTree.defaultFileId || files[0]?.id || "");
	let activeFile = $derived(findBlockCodeFile(codeTree, activeFileId) ?? files[0]);

	$effect(() => {
		activeFileId = fallbackFileId;
		openFolderIds = new Set(collectDefaultOpenFolderIds(codeTree.nodes));
	});

	function selectFile(fileId: string) {
		activeFileId = fileId;
	}

	function toggleFolder(folderId: string) {
		const next = new Set(openFolderIds);

		if (next.has(folderId)) {
			next.delete(folderId);
		} else {
			next.add(folderId);
		}

		openFolderIds = next;
	}

	async function copyCode() {
		if (!activeFile) return;
		if (!activeFile.code) return;
		await clipboard.copy(activeFile.code);
	}
</script>

<!-- border-t -->
<div class="sm:min-h-[36rem] sm:flex-row flex flex-col">
	<div
		class="bg-neutral-50 text-black sm:w-72 sm:border-r sm:border-b-0 dark:bg-zinc-900/25 dark:text-white w-full border-b [--color-background:var(--color-zinc-900)] [--color-foreground:white] [--color-muted:var(--color-zinc-800)]"
	>
		<div class="px-4 py-3 text-sm tracking-wider border-b font-mono text-muted-foreground">
			Files
		</div>
		<div class="px-2 py-3 sm:max-h-[36rem] max-h-[18rem] overflow-auto">
			{#each codeTree.nodes as node (node.id)}
				<CodeTreeNode
					{node}
					{activeFileId}
					{openFolderIds}
					onSelectFile={selectFile}
					onToggleFolder={toggleFolder}
				/>
			{/each}
		</div>
	</div>

	<div class="min-w-0 relative min-h-[32rem] flex-1">
		<div class="gap-3 py-1.5 pr-2 pl-4 flex items-center justify-between border-b">
			<p class="min-w-0 text-sm tracking-wider truncate font-mono text-muted-foreground">
				{activeFile?.name ?? "No file selected"}
			</p>

			<div class="gap-1 flex items-center">
				{#if activeFile?.externalUrl}
					<Button
						class="h-8 gap-1.5 px-3 text-xs"
						variant="outline"
						size="sm"
						href={activeFile.externalUrl}
						target="_blank"
					>
						<ExternalLink class="size-3.5" />
						<span>{activeFile.externalLabel ?? "Open docs"}</span>
					</Button>
				{/if}

				{#if activeFile?.code}
					<Button
						class="h-8 w-8 shrink-0"
						variant="ghost"
						size="icon"
						type="button"
						onclick={copyCode}
					>
						{#if clipboard.status === "success"}
							<span in:scale>
								<Check class="!size-3.5 text-[#10B981]" />
							</span>
						{:else}
							<span in:scale>
								<Copy class="!size-3.5 opacity-50" />
							</span>
						{/if}
					</Button>
				{/if}
			</div>
		</div>

		{#if activeFile?.code}
			<Code code={activeFile.code} lang={activeFile.lang} highlight={activeFile.highlight} />
		{:else if activeFile?.externalUrl}
			<div class="px-6 flex min-h-[20rem] items-center justify-center">
				<div class="max-w-md text-center">
					<p class="text-sm font-medium text-foreground">
						{activeFile.externalLabel ?? activeFile.name}
					</p>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						This base UI component is referenced from its original source instead of being
						duplicated here.
					</p>
					<div class="mt-4 flex justify-center">
						<Button href={activeFile.externalUrl} target="_blank" variant="outline" size="sm">
							<ExternalLink class="size-3.5" />
							<span>Open component docs</span>
						</Button>
					</div>
				</div>
			</div>
		{:else}
			<div
				class="px-6 text-sm flex h-full min-h-[20rem] items-center justify-center text-muted-foreground"
			>
				No code files are available for this block yet.
			</div>
		{/if}
	</div>
</div>
