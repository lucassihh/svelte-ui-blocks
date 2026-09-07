// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TeamOnePreview from "$lib/components/blocks/veil/team/team-one/team-one.svelte";
import TeamTwoPreview from "$lib/components/blocks/veil/team/team-two/team-two.svelte";

// Raw
import teamTeamOneSource from "$lib/components/blocks/veil/team/team-one/team-one.svelte?raw";
import teamTeamTwoSource from "$lib/components/blocks/veil/team/team-two/team-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const teamBlocks: BlockShowcaseItem[] = [
	{
		id: "team-one",
		title: "Team One",
		description:
			"A Team One composition.",
		previewComponent: TeamOnePreview,
		previewHref: "/preview/veil/team/team-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "team-one",
		codeTree: createBlockCodeTree("team-one", [
			{
				id: "team-one",
				path: "src/lib/components/blocks/veil/team/team-one/team-one.svelte",
				lang: "svelte",
				code: teamTeamOneSource
			}
		])
	},	{
		id: "team-two",
		title: "Team Two",
		description:
			"A Team Two composition.",
		previewComponent: TeamTwoPreview,
		previewHref: "/preview/veil/team/team-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "team-two",
		codeTree: createBlockCodeTree("team-two", [
			{
				id: "team-two",
				path: "src/lib/components/blocks/veil/team/team-two/team-two.svelte",
				lang: "svelte",
				code: teamTeamTwoSource
			}
		])
	}
];

export function getTeamBlock(id: string) {
	return teamBlocks.find((block) => block.id === id);
}
