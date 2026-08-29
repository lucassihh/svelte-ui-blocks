// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import IntegrationFivePreview from "$lib/components/blocks/efferd/integration/integration-five/integration.svelte";
import IntegrationFourPreview from "$lib/components/blocks/efferd/integration/integration-four/integration-card-four.svelte";
import IntegrationOnePreview from "$lib/components/blocks/efferd/integration/integration-one/integration.svelte";
import IntegrationThreePreview from "$lib/components/blocks/efferd/integration/integration-three/integration-card-three.svelte";
import IntegrationTwoPreview from "$lib/components/blocks/efferd/integration/integration-two/integration-card-two.svelte";

// Raw
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import integrationIntegrationFiveIntegrationSource from "$lib/components/blocks/efferd/integration/integration-five/integration.svelte?raw";
import integrationIntegrationFourIntegrationCardFourSource from "$lib/components/blocks/efferd/integration/integration-four/integration-card-four.svelte?raw";
import integrationIntegrationOneIntegrationSource from "$lib/components/blocks/efferd/integration/integration-one/integration.svelte?raw";
import integrationIntegrationThreeIntegrationCardThreeSource from "$lib/components/blocks/efferd/integration/integration-three/integration-card-three.svelte?raw";
import integrationIntegrationTwoIntegrationCardTwoSource from "$lib/components/blocks/efferd/integration/integration-two/integration-card-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];

export const integrationBlocks: BlockShowcaseItem[] = [
	{
		id: "integration-one",
		title: "Integration One",
		description:
			"A Integration One composition.",
		previewComponent: IntegrationOnePreview,
		previewHref: "/preview/efferd/integration/integration-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "integration-one",
		codeTree: createBlockCodeTree("integration-one", [
			{
				id: "integration-one",
				path: "src/lib/components/blocks/efferd/integration/integration-one/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationOneIntegrationSource
			},
			...buttonFiles
		])
	},	{
		id: "integration-two",
		title: "Integration Two",
		description:
			"A Integration Two composition.",
		previewComponent: IntegrationTwoPreview,
		previewHref: "/preview/efferd/integration/integration-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "integration-two",
		codeTree: createBlockCodeTree("integration-two", [
			{
				id: "integration-two",
				path: "src/lib/components/blocks/efferd/integration/integration-two/integration-card-two.svelte",
				lang: "svelte",
				code: integrationIntegrationTwoIntegrationCardTwoSource
			},
			...decorIconFiles
		])
	},	{
		id: "integration-three",
		title: "Integration Three",
		description:
			"A Integration Three composition.",
		previewComponent: IntegrationThreePreview,
		previewHref: "/preview/efferd/integration/integration-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "integration-three",
		codeTree: createBlockCodeTree("integration-three", [
			{
				id: "integration-three",
				path: "src/lib/components/blocks/efferd/integration/integration-three/integration-card-three.svelte",
				lang: "svelte",
				code: integrationIntegrationThreeIntegrationCardThreeSource
			}
		])
	},	{
		id: "integration-four",
		title: "Integration Four",
		description:
			"A Integration Four composition.",
		previewComponent: IntegrationFourPreview,
		previewHref: "/preview/efferd/integration/integration-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "integration-four",
		codeTree: createBlockCodeTree("integration-four", [
			{
				id: "integration-four",
				path: "src/lib/components/blocks/efferd/integration/integration-four/integration-card-four.svelte",
				lang: "svelte",
				code: integrationIntegrationFourIntegrationCardFourSource
			}
		])
	},	{
		id: "integration-five",
		title: "Integration Five",
		description:
			"A Integration Five composition.",
		previewComponent: IntegrationFivePreview,
		previewHref: "/preview/efferd/integration/integration-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "integration-five",
		codeTree: createBlockCodeTree("integration-five", [
			{
				id: "integration-five",
				path: "src/lib/components/blocks/efferd/integration/integration-five/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationFiveIntegrationSource
			},
			...buttonFiles
		])
	}
];

export function getIntegrationBlock(id: string) {
	return integrationBlocks.find((block) => block.id === id);
}
