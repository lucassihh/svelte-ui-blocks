// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedBeamFivePreview from "$lib/components/blocks/magic/animated-beam/animated-beam-five/google-docs-icon.svelte";
import AnimatedBeamOnePreview from "$lib/components/blocks/magic/animated-beam/animated-beam-one/animated-beam.svelte";
import AnimatedBeamSevenPreview from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/google-docs-icon.svelte";
import AnimatedBeamSixPreview from "$lib/components/blocks/magic/animated-beam/animated-beam-six/circle.svelte";
import AnimatedBeamThreePreview from "$lib/components/blocks/magic/animated-beam/animated-beam-three/circle.svelte";
import AnimatedBeamTwoPreview from "$lib/components/blocks/magic/animated-beam/animated-beam-two/circle.svelte";

// Raw
import animatedBeamAnimatedBeamFiveAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamFiveCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/circle.svelte?raw";
import animatedBeamAnimatedBeamFiveGoogleDocsIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/google-docs-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveGoogleDriveIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/google-drive-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveMessengerIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/messenger-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveNotionIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/notion-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/user-icon.svelte?raw";
import animatedBeamAnimatedBeamFiveWhatsappIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-five/whatsapp-icon.svelte?raw";
import animatedBeamAnimatedBeamOneAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-one/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamOneCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-one/circle.svelte?raw";
import animatedBeamAnimatedBeamOneOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-one/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamOneUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-one/user-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamSevenCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/circle.svelte?raw";
import animatedBeamAnimatedBeamSevenGoogleDocsIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/google-docs-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenGoogleDriveIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/google-drive-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenMessengerIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/messenger-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenNotionIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/notion-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/user-icon.svelte?raw";
import animatedBeamAnimatedBeamSevenWhatsappIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-seven/whatsapp-icon.svelte?raw";
import animatedBeamAnimatedBeamSixAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-six/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamSixCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-six/circle.svelte?raw";
import animatedBeamAnimatedBeamSixOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-six/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamSixUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-six/user-icon.svelte?raw";
import animatedBeamAnimatedBeamThreeAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-three/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamThreeCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-three/circle.svelte?raw";
import animatedBeamAnimatedBeamThreeOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-three/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamThreeUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-three/user-icon.svelte?raw";
import animatedBeamAnimatedBeamTwoAnimatedBeamSource from "$lib/components/blocks/magic/animated-beam/animated-beam-two/animated-beam.svelte?raw";
import animatedBeamAnimatedBeamTwoCircleSource from "$lib/components/blocks/magic/animated-beam/animated-beam-two/circle.svelte?raw";
import animatedBeamAnimatedBeamTwoOpenaiIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-two/openai-icon.svelte?raw";
import animatedBeamAnimatedBeamTwoUserIconSource from "$lib/components/blocks/magic/animated-beam/animated-beam-two/user-icon.svelte?raw";
import animatedBeamIndexSource from "$lib/components/ui/magic-ui/animated-beam/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedBeamBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-beam-one",
		title: "Animated Beam One",
		description:
			"A Animated Beam One composition.",
		previewComponent: AnimatedBeamOnePreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-one",
		codeTree: createBlockCodeTree("animated-beam-one:animated-beam", [
			{
				id: "animated-beam-one:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-one/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamOneAnimatedBeamSource
			},
			{
				id: "animated-beam-one:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-one/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamOneCircleSource
			},
			{
				id: "animated-beam-one:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-one/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamOneOpenaiIconSource
			},
			{
				id: "animated-beam-one:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-one/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamOneUserIconSource
			}
		])
	},	{
		id: "animated-beam-two",
		title: "Animated Beam Two",
		description:
			"A Animated Beam Two composition.",
		previewComponent: AnimatedBeamTwoPreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-two",
		codeTree: createBlockCodeTree("animated-beam-two:animated-beam", [
			{
				id: "animated-beam-two:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-two/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamTwoAnimatedBeamSource
			},
			{
				id: "animated-beam-two:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-two/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamTwoCircleSource
			},
			{
				id: "animated-beam-two:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-two/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamTwoOpenaiIconSource
			},
			{
				id: "animated-beam-two:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-two/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamTwoUserIconSource
			}
		])
	},	{
		id: "animated-beam-three",
		title: "Animated Beam Three",
		description:
			"A Animated Beam Three composition.",
		previewComponent: AnimatedBeamThreePreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-three",
		codeTree: createBlockCodeTree("animated-beam-three:animated-beam", [
			{
				id: "animated-beam-three:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-three/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamThreeAnimatedBeamSource
			},
			{
				id: "animated-beam-three:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-three/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamThreeCircleSource
			},
			{
				id: "animated-beam-three:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-three/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamThreeOpenaiIconSource
			},
			{
				id: "animated-beam-three:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-three/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamThreeUserIconSource
			}
		])
	},	{
		id: "animated-beam-five",
		title: "Animated Beam Five",
		description:
			"A Animated Beam Five composition.",
		previewComponent: AnimatedBeamFivePreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-five",
		codeTree: createBlockCodeTree("animated-beam-five:animated-beam", [
			{
				id: "animated-beam-five:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveAnimatedBeamSource
			},
			{
				id: "animated-beam-five:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveCircleSource
			},
			{
				id: "animated-beam-five:google-docs-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/google-docs-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveGoogleDocsIconSource
			},
			{
				id: "animated-beam-five:google-drive-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/google-drive-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveGoogleDriveIconSource
			},
			{
				id: "animated-beam-five:messenger-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/messenger-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveMessengerIconSource
			},
			{
				id: "animated-beam-five:notion-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/notion-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveNotionIconSource
			},
			{
				id: "animated-beam-five:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveOpenaiIconSource
			},
			{
				id: "animated-beam-five:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveUserIconSource
			},
			{
				id: "animated-beam-five:whatsapp-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-five/whatsapp-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamFiveWhatsappIconSource
			}
		])
	},	{
		id: "animated-beam-six",
		title: "Animated Beam Six",
		description:
			"A Animated Beam Six composition.",
		previewComponent: AnimatedBeamSixPreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-six",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-six",
		codeTree: createBlockCodeTree("animated-beam-six:animated-beam", [
			{
				id: "animated-beam-six:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-six/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSixAnimatedBeamSource
			},
			{
				id: "animated-beam-six:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-six/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSixCircleSource
			},
			{
				id: "animated-beam-six:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-six/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSixOpenaiIconSource
			},
			{
				id: "animated-beam-six:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-six/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSixUserIconSource
			}
		])
	},	{
		id: "animated-beam-seven",
		title: "Animated Beam Seven",
		description:
			"A Animated Beam Seven composition.",
		previewComponent: AnimatedBeamSevenPreview,
		previewHref: "/preview/magic/animated-beam/animated-beam-seven",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-beam-seven",
		codeTree: createBlockCodeTree("animated-beam-seven:animated-beam", [
			{
				id: "animated-beam-seven:animated-beam",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/animated-beam.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenAnimatedBeamSource
			},
			{
				id: "animated-beam-seven:circle",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/circle.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenCircleSource
			},
			{
				id: "animated-beam-seven:google-docs-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/google-docs-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenGoogleDocsIconSource
			},
			{
				id: "animated-beam-seven:google-drive-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/google-drive-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenGoogleDriveIconSource
			},
			{
				id: "animated-beam-seven:messenger-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/messenger-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenMessengerIconSource
			},
			{
				id: "animated-beam-seven:notion-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/notion-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenNotionIconSource
			},
			{
				id: "animated-beam-seven:openai-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/openai-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenOpenaiIconSource
			},
			{
				id: "animated-beam-seven:user-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/user-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenUserIconSource
			},
			{
				id: "animated-beam-seven:whatsapp-icon",
				path: "src/lib/components/blocks/magic/animated-beam/animated-beam-seven/whatsapp-icon.svelte",
				lang: "svelte",
				code: animatedBeamAnimatedBeamSevenWhatsappIconSource
			}
		])
	}
];

export function getAnimatedBeamBlock(id: string) {
	return animatedBeamBlocks.find((block) => block.id === id);
}
