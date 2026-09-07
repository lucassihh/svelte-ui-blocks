// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ForgotPasswordOnePreview from "$lib/components/blocks/veil/forgot-password/forgot-password-one/forgot-password-one.svelte";
import ForgotPasswordThreePreview from "$lib/components/blocks/veil/forgot-password/forgot-password-three/forgot-password-three.svelte";
import ForgotPasswordTwoPreview from "$lib/components/blocks/veil/forgot-password/forgot-password-two/forgot-password-two.svelte";

// Raw
import forgotPasswordForgotPasswordOneSource from "$lib/components/blocks/veil/forgot-password/forgot-password-one/forgot-password-one.svelte?raw";
import forgotPasswordForgotPasswordThreeSource from "$lib/components/blocks/veil/forgot-password/forgot-password-three/forgot-password-three.svelte?raw";
import forgotPasswordForgotPasswordTwoSource from "$lib/components/blocks/veil/forgot-password/forgot-password-two/forgot-password-two.svelte?raw";
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";

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

export const forgotPasswordBlocks: BlockShowcaseItem[] = [
	{
		id: "forgot-password-one",
		title: "Forgot Password One",
		description:
			"A Forgot Password One composition.",
		previewComponent: ForgotPasswordOnePreview,
		previewHref: "/preview/veil/forgot-password/forgot-password-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "forgot-password-one",
		codeTree: createBlockCodeTree("forgot-password-one", [
			{
				id: "forgot-password-one",
				path: "src/lib/components/blocks/veil/forgot-password/forgot-password-one/forgot-password-one.svelte",
				lang: "svelte",
				code: forgotPasswordForgotPasswordOneSource
			},
			...logoFiles
		])
	},	{
		id: "forgot-password-two",
		title: "Forgot Password Two",
		description:
			"A Forgot Password Two composition.",
		previewComponent: ForgotPasswordTwoPreview,
		previewHref: "/preview/veil/forgot-password/forgot-password-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "forgot-password-two",
		codeTree: createBlockCodeTree("forgot-password-two", [
			{
				id: "forgot-password-two",
				path: "src/lib/components/blocks/veil/forgot-password/forgot-password-two/forgot-password-two.svelte",
				lang: "svelte",
				code: forgotPasswordForgotPasswordTwoSource
			},
			...logoFiles
		])
	},	{
		id: "forgot-password-three",
		title: "Forgot Password Three",
		description:
			"A Forgot Password Three composition.",
		previewComponent: ForgotPasswordThreePreview,
		previewHref: "/preview/veil/forgot-password/forgot-password-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "forgot-password-three",
		codeTree: createBlockCodeTree("forgot-password-three", [
			{
				id: "forgot-password-three",
				path: "src/lib/components/blocks/veil/forgot-password/forgot-password-three/forgot-password-three.svelte",
				lang: "svelte",
				code: forgotPasswordForgotPasswordThreeSource
			},
			...logoFiles
		])
	}
];

export function getForgotPasswordBlock(id: string) {
	return forgotPasswordBlocks.find((block) => block.id === id);
}
