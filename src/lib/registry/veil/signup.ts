// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import SignupOnePreview from "$lib/components/blocks/veil/signup/signup-one/signup-one.svelte";
import SignupThreePreview from "$lib/components/blocks/veil/signup/signup-three/signup-three.svelte";
import SignupTwoPreview from "$lib/components/blocks/veil/signup/signup-two/signup-two.svelte";

// Raw
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import signupSignupOneSource from "$lib/components/blocks/veil/signup/signup-one/signup-one.svelte?raw";
import signupSignupThreeSource from "$lib/components/blocks/veil/signup/signup-three/signup-three.svelte?raw";
import signupSignupTwoSource from "$lib/components/blocks/veil/signup/signup-two/signup-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const logoFiles = [
	{
		id: "shared:logo-svg",
		path: "svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSvgSource
	}
];

export const signupBlocks: BlockShowcaseItem[] = [
	{
		id: "signup-one",
		title: "Signup One",
		description:
			"Signup components",
		previewComponent: SignupOnePreview,
		previewHref: "/preview/veil/signup/signup-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "signup-one",
		codeTree: createBlockCodeTree("signup-one", [
			{
				id: "signup-one",
				path: "src/lib/components/blocks/veil/signup/signup-one/signup-one.svelte",
				lang: "svelte",
				code: signupSignupOneSource
			},
			...logoFiles
		])
	},	{
		id: "signup-two",
		title: "Signup Two",
		description:
			"Signup components",
		previewComponent: SignupTwoPreview,
		previewHref: "/preview/veil/signup/signup-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "signup-two",
		codeTree: createBlockCodeTree("signup-two", [
			{
				id: "signup-two",
				path: "src/lib/components/blocks/veil/signup/signup-two/signup-two.svelte",
				lang: "svelte",
				code: signupSignupTwoSource
			},
			...logoFiles
		])
	},	{
		id: "signup-three",
		title: "Signup Three",
		description:
			"Signup components",
		previewComponent: SignupThreePreview,
		previewHref: "/preview/veil/signup/signup-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "signup-three",
		codeTree: createBlockCodeTree("signup-three", [
			{
				id: "signup-three",
				path: "src/lib/components/blocks/veil/signup/signup-three/signup-three.svelte",
				lang: "svelte",
				code: signupSignupThreeSource
			},
			...logoFiles
		])
	}
];

export function getSignupBlock(id: string) {
	return signupBlocks.find((block) => block.id === id);
}
