// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Preview Imports
import IntegrationFivePreview from "$lib/components/ui-blocks/efferd-ui/integration/integration-five/integration.svelte";
import IntegrationFourPreview from "$lib/components/ui-blocks/efferd-ui/integration/integration-four/integration-card-four.svelte";
import IntegrationOnePreview from "$lib/components/ui-blocks/efferd-ui/integration/integration-one/integration.svelte";
import IntegrationThreePreview from "$lib/components/ui-blocks/efferd-ui/integration/integration-three/integration-card-three.svelte";
import IntegrationTwoPreview from "$lib/components/ui-blocks/efferd-ui/integration/integration-two/integration-card-two.svelte";

// Raw
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import integrationIntegrationFiveIntegrationSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-five/integration.svelte?raw";
import integrationIntegrationFourIntegrationCardFourSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-four/integration-card-four.svelte?raw";
import integrationIntegrationFourIntegrationSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-four/integration.svelte?raw";
import integrationIntegrationOneIntegrationSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-one/integration.svelte?raw";
import integrationIntegrationThreeIntegrationCardThreeSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-three/integration-card-three.svelte?raw";
import integrationIntegrationThreeIntegrationSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-three/integration.svelte?raw";
import integrationIntegrationTwoIntegrationCardTwoSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-two/integration-card-two.svelte?raw";
import integrationIntegrationTwoIntegrationSource from "$lib/components/ui-blocks/efferd-ui/integration/integration-two/integration.svelte?raw";

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
		id: "shared:decor-icon",
		path: "components/ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	},
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider",
		path: "components/ui/full-width-divider/full-width-divider.svelte",
		lang: "svelte" as const,
		code: dividerSource
	},
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const integrationBlocks: BlockShowcaseItem[] = [
	{
		id: "integration-one",
		title: "Integration One",
		description: "A Integration One composition.",
		previewComponent: IntegrationOnePreview,
		previewHref: "/preview/efferd-ui/integration/integration-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "integration-one",
		codeTree: createBlockCodeTree("integration-one:integration", [
			{
				id: "integration-one:integration",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-one/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationOneIntegrationSource
			},
			...buttonFiles
		])
	},
	{
		id: "integration-two",
		title: "Integration Two",
		description: "A Integration Two composition.",
		previewComponent: IntegrationTwoPreview,
		previewHref: "/preview/efferd-ui/integration/integration-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "integration-two",
		codeTree: createBlockCodeTree("integration-two:integration", [
			{
				id: "integration-two:integration-card-two",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-two/integration-card-two.svelte",
				lang: "svelte",
				code: integrationIntegrationTwoIntegrationCardTwoSource
			},
			{
				id: "integration-two:integration",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-two/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationTwoIntegrationSource
			},
			...decorIconFiles
		])
	},
	{
		id: "integration-three",
		title: "Integration Three",
		description: "A Integration Three composition.",
		previewComponent: IntegrationThreePreview,
		previewHref: "/preview/efferd-ui/integration/integration-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "integration-three",
		codeTree: createBlockCodeTree("integration-three:integration", [
			{
				id: "integration-three:integration-card-three",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-three/integration-card-three.svelte",
				lang: "svelte",
				code: integrationIntegrationThreeIntegrationCardThreeSource
			},
			{
				id: "integration-three:integration",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-three/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationThreeIntegrationSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "integration-four",
		title: "Integration Four",
		description: "A Integration Four composition.",
		previewComponent: IntegrationFourPreview,
		previewHref: "/preview/efferd-ui/integration/integration-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "integration-four",
		codeTree: createBlockCodeTree("integration-four:integration", [
			{
				id: "integration-four:integration-card-four",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-four/integration-card-four.svelte",
				lang: "svelte",
				code: integrationIntegrationFourIntegrationCardFourSource
			},
			{
				id: "integration-four:integration",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-four/integration.svelte",
				lang: "svelte",
				code: integrationIntegrationFourIntegrationSource
			}
		])
	},
	{
		id: "integration-five",
		title: "Integration Five",
		description: "A Integration Five composition.",
		previewComponent: IntegrationFivePreview,
		previewHref: "/preview/efferd-ui/integration/integration-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "integration-five",
		codeTree: createBlockCodeTree("integration-five:integration", [
			{
				id: "integration-five:integration",
				path: "src/lib/components/ui-blocks/efferd-ui/integration/integration-five/integration.svelte",
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
