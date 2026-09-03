// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AvatarCircleOnePreview from "$lib/components/blocks/magic/avatar-circles/avatar-circle-one/avatar-circle.svelte";

// Raw
import avatarCirclesAvatarCircleOneAvatarCircleSource from "$lib/components/blocks/magic/avatar-circles/avatar-circle-one/avatar-circle.svelte?raw";
import avatarCirclesIndexSource from "$lib/components/ui/magic-ui/avatar-circles/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const avatarCirclesBlocks: BlockShowcaseItem[] = [
	{
		id: "avatar-circle-one",
		title: "Avatar Circle One",
		description:
			"A Avatar Circle One composition.",
		previewComponent: AvatarCircleOnePreview,
		previewHref: "/preview/magic/avatar-circles/avatar-circle-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "avatar-circle-one",
		codeTree: createBlockCodeTree("avatar-circle-one", [
			{
				id: "avatar-circle-one",
				path: "src/lib/components/blocks/magic/avatar-circles/avatar-circle-one/avatar-circle.svelte",
				lang: "svelte",
				code: avatarCirclesAvatarCircleOneAvatarCircleSource
			}
		])
	}
];

export function getAvatarCirclesBlock(id: string) {
	return avatarCirclesBlocks.find((block) => block.id === id);
}
