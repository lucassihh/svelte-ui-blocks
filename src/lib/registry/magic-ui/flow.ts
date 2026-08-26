// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FlowEightPreview from "$lib/components/blocks/magic-ui/flow/flow-eight/dynamic-nodes.svelte";
import FlowFivePreview from "$lib/components/blocks/magic-ui/flow/flow-five/custom-node-styling.svelte";
import FlowFourPreview from "$lib/components/blocks/magic-ui/flow/flow-four/vertical-parallel.svelte";
import FlowNinePreview from "$lib/components/blocks/magic-ui/flow/flow-nine/disabled-nodes.svelte";
import FlowOnePreview from "$lib/components/blocks/magic-ui/flow/flow-one/basic.svelte";
import FlowSevenPreview from "$lib/components/blocks/magic-ui/flow/flow-seven/responsive-orientation-toggle.svelte";
import FlowSixPreview from "$lib/components/blocks/magic-ui/flow/flow-six/vertical.svelte";
import FlowTenPreview from "$lib/components/blocks/magic-ui/flow/flow-ten/custom-anchor-points.svelte";
import FlowThreePreview from "$lib/components/blocks/magic-ui/flow/flow-three/interactive-flow-node.svelte";
import FlowTwoPreview from "$lib/components/blocks/magic-ui/flow/flow-two/parallel-branches.svelte";

// Raw
import flowFlowEightDynamicNodesSource from "$lib/components/blocks/magic-ui/flow/flow-eight/dynamic-nodes.svelte?raw";
import flowFlowFiveCustomNodeStylingSource from "$lib/components/blocks/magic-ui/flow/flow-five/custom-node-styling.svelte?raw";
import flowFlowFourVerticalParallelSource from "$lib/components/blocks/magic-ui/flow/flow-four/vertical-parallel.svelte?raw";
import flowFlowNineDisabledNodesSource from "$lib/components/blocks/magic-ui/flow/flow-nine/disabled-nodes.svelte?raw";
import flowFlowOneBasicSource from "$lib/components/blocks/magic-ui/flow/flow-one/basic.svelte?raw";
import flowFlowSevenResponsiveOrientationToggleSource from "$lib/components/blocks/magic-ui/flow/flow-seven/responsive-orientation-toggle.svelte?raw";
import flowFlowSixVerticalSource from "$lib/components/blocks/magic-ui/flow/flow-six/vertical.svelte?raw";
import flowFlowTenCustomAnchorPointsSource from "$lib/components/blocks/magic-ui/flow/flow-ten/custom-anchor-points.svelte?raw";
import flowFlowThreeInteractiveFlowNodeSource from "$lib/components/blocks/magic-ui/flow/flow-three/interactive-flow-node.svelte?raw";
import flowFlowTwoParallelBranchesSource from "$lib/components/blocks/magic-ui/flow/flow-two/parallel-branches.svelte?raw";
import flowIndexSource from "$lib/components/ui/magic-ui/flow/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const flowIndexFiles = [
	{
		id: "flow-one:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-two:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-three:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-four:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-five:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-six:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-seven:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-eight:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-nine:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	},
	{
		id: "flow-ten:flow",
		path: "src/lib/components/ui/magic-ui/flow/index.ts",
		lang: "typescript" as const,
		code: flowIndexSource
	}
];

export const flowBlocks: BlockShowcaseItem[] = [
	{
		id: "flow-one",
		title: "Flow One",
		description:
			"A Flow One composition.",
		previewComponent: FlowOnePreview,
		previewHref: "/preview/magic-ui/flow/flow-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-one",
		codeTree: createBlockCodeTree("flow-one", [
			{
				id: "flow-one",
				path: "src/lib/components/blocks/magic-ui/flow/flow-one/basic.svelte",
				lang: "svelte",
				code: flowFlowOneBasicSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-two",
		title: "Flow Two",
		description:
			"A Flow Two composition.",
		previewComponent: FlowTwoPreview,
		previewHref: "/preview/magic-ui/flow/flow-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-two",
		codeTree: createBlockCodeTree("flow-two", [
			{
				id: "flow-two",
				path: "src/lib/components/blocks/magic-ui/flow/flow-two/parallel-branches.svelte",
				lang: "svelte",
				code: flowFlowTwoParallelBranchesSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-three",
		title: "Flow Three",
		description:
			"A Flow Three composition.",
		previewComponent: FlowThreePreview,
		previewHref: "/preview/magic-ui/flow/flow-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-three",
		codeTree: createBlockCodeTree("flow-three", [
			{
				id: "flow-three",
				path: "src/lib/components/blocks/magic-ui/flow/flow-three/interactive-flow-node.svelte",
				lang: "svelte",
				code: flowFlowThreeInteractiveFlowNodeSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-four",
		title: "Flow Four",
		description:
			"A Flow Four composition.",
		previewComponent: FlowFourPreview,
		previewHref: "/preview/magic-ui/flow/flow-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-four",
		codeTree: createBlockCodeTree("flow-four", [
			{
				id: "flow-four",
				path: "src/lib/components/blocks/magic-ui/flow/flow-four/vertical-parallel.svelte",
				lang: "svelte",
				code: flowFlowFourVerticalParallelSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-five",
		title: "Flow Five",
		description:
			"A Flow Five composition.",
		previewComponent: FlowFivePreview,
		previewHref: "/preview/magic-ui/flow/flow-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-five",
		codeTree: createBlockCodeTree("flow-five", [
			{
				id: "flow-five",
				path: "src/lib/components/blocks/magic-ui/flow/flow-five/custom-node-styling.svelte",
				lang: "svelte",
				code: flowFlowFiveCustomNodeStylingSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-six",
		title: "Flow Six",
		description:
			"A Flow Six composition.",
		previewComponent: FlowSixPreview,
		previewHref: "/preview/magic-ui/flow/flow-six",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-six",
		codeTree: createBlockCodeTree("flow-six", [
			{
				id: "flow-six",
				path: "src/lib/components/blocks/magic-ui/flow/flow-six/vertical.svelte",
				lang: "svelte",
				code: flowFlowSixVerticalSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-seven",
		title: "Flow Seven",
		description:
			"A Flow Seven composition.",
		previewComponent: FlowSevenPreview,
		previewHref: "/preview/magic-ui/flow/flow-seven",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-seven",
		codeTree: createBlockCodeTree("flow-seven", [
			{
				id: "flow-seven",
				path: "src/lib/components/blocks/magic-ui/flow/flow-seven/responsive-orientation-toggle.svelte",
				lang: "svelte",
				code: flowFlowSevenResponsiveOrientationToggleSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-eight",
		title: "Flow Eight",
		description:
			"A Flow Eight composition.",
		previewComponent: FlowEightPreview,
		previewHref: "/preview/magic-ui/flow/flow-eight",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-eight",
		codeTree: createBlockCodeTree("flow-eight", [
			{
				id: "flow-eight",
				path: "src/lib/components/blocks/magic-ui/flow/flow-eight/dynamic-nodes.svelte",
				lang: "svelte",
				code: flowFlowEightDynamicNodesSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-nine",
		title: "Flow Nine",
		description:
			"A Flow Nine composition.",
		previewComponent: FlowNinePreview,
		previewHref: "/preview/magic-ui/flow/flow-nine",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-nine",
		codeTree: createBlockCodeTree("flow-nine", [
			{
				id: "flow-nine",
				path: "src/lib/components/blocks/magic-ui/flow/flow-nine/disabled-nodes.svelte",
				lang: "svelte",
				code: flowFlowNineDisabledNodesSource
			},
			...flowIndexFiles
		])
	},	{
		id: "flow-ten",
		title: "Flow Ten",
		description:
			"A Flow Ten composition.",
		previewComponent: FlowTenPreview,
		previewHref: "/preview/magic-ui/flow/flow-ten",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "flow-ten",
		codeTree: createBlockCodeTree("flow-ten", [
			{
				id: "flow-ten",
				path: "src/lib/components/blocks/magic-ui/flow/flow-ten/custom-anchor-points.svelte",
				lang: "svelte",
				code: flowFlowTenCustomAnchorPointsSource
			},
			...flowIndexFiles
		])
	}
];

export function getFlowBlock(id: string) {
	return flowBlocks.find((block) => block.id === id);
}
