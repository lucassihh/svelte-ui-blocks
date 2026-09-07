// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LoginOnePreview from "$lib/components/blocks/veil/login/login-one/login-one.svelte";
import LoginThreePreview from "$lib/components/blocks/veil/login/login-three/login-three.svelte";
import LoginTwoPreview from "$lib/components/blocks/veil/login/login-two/login-two.svelte";

// Raw
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import loginLoginOneSource from "$lib/components/blocks/veil/login/login-one/login-one.svelte?raw";
import loginLoginThreeSource from "$lib/components/blocks/veil/login/login-three/login-three.svelte?raw";
import loginLoginTwoSource from "$lib/components/blocks/veil/login/login-two/login-two.svelte?raw";
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

export const loginBlocks: BlockShowcaseItem[] = [
	{
		id: "login-one",
		title: "Login One",
		description:
			"Login components",
		previewComponent: LoginOnePreview,
		previewHref: "/preview/veil/login/login-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "login-one",
		codeTree: createBlockCodeTree("login-one", [
			{
				id: "login-one",
				path: "src/lib/components/blocks/veil/login/login-one/login-one.svelte",
				lang: "svelte",
				code: loginLoginOneSource
			},
			...logoFiles
		])
	},	{
		id: "login-two",
		title: "Login Two",
		description:
			"Login components",
		previewComponent: LoginTwoPreview,
		previewHref: "/preview/veil/login/login-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "login-two",
		codeTree: createBlockCodeTree("login-two", [
			{
				id: "login-two",
				path: "src/lib/components/blocks/veil/login/login-two/login-two.svelte",
				lang: "svelte",
				code: loginLoginTwoSource
			},
			...logoFiles
		])
	},	{
		id: "login-three",
		title: "Login Three",
		description:
			"Login components",
		previewComponent: LoginThreePreview,
		previewHref: "/preview/veil/login/login-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "login-three",
		codeTree: createBlockCodeTree("login-three", [
			{
				id: "login-three",
				path: "src/lib/components/blocks/veil/login/login-three/login-three.svelte",
				lang: "svelte",
				code: loginLoginThreeSource
			},
			...logoFiles
		])
	}
];

export function getLoginBlock(id: string) {
	return loginBlocks.find((block) => block.id === id);
}
