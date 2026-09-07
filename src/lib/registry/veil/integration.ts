// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import IntegrationOnePreview from "$lib/components/blocks/veil/integration/integration-one/integration-one.svelte";
import IntegrationTwoPreview from "$lib/components/blocks/veil/integration/integration-two/integration-illustration.svelte";

// Raw
import integrationIntegrationOneIntegrationIllustrationSource from "$lib/components/blocks/veil/integration/integration-one/integration-illustration.svelte?raw";
import integrationIntegrationOneSource from "$lib/components/blocks/veil/integration/integration-one/integration-one.svelte?raw";
import integrationIntegrationTwoIntegrationIllustrationSource from "$lib/components/blocks/veil/integration/integration-two/integration-illustration.svelte?raw";
import svgIndexSource from "$lib/assets/svg/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const integrationBlocks: BlockShowcaseItem[] = [
	{
		id: "integration-one",
		title: "Integration One",
		description:
			"A Integration One composition.",
		previewComponent: IntegrationOnePreview,
		previewHref: "/preview/veil/integration/integration-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "integration-one",
		codeTree: createBlockCodeTree("integration-one:integration", [
			{
				id: "integration-one:integration-illustration",
				path: "src/lib/components/blocks/veil/integration/integration-one/integration-illustration.svelte",
				lang: "svelte",
				code: integrationIntegrationOneIntegrationIllustrationSource
			},
			{
				id: "integration-one:integration-one",
				path: "src/lib/components/blocks/veil/integration/integration-one/integration-one.svelte",
				lang: "svelte",
				code: integrationIntegrationOneSource
			}
		])
	},	{
		id: "integration-two",
		title: "Integration Two",
		description:
			"A Integration Two composition.",
		previewComponent: IntegrationTwoPreview,
		previewHref: "/preview/veil/integration/integration-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "integration-two",
		codeTree: createBlockCodeTree("integration-two", [
			{
				id: "integration-two",
				path: "src/lib/components/blocks/veil/integration/integration-two/integration-illustration.svelte",
				lang: "svelte",
				code: integrationIntegrationTwoIntegrationIllustrationSource
			}
		])
	}
];

export function getIntegrationBlock(id: string) {
	return integrationBlocks.find((block) => block.id === id);
}
