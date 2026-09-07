// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AuthFivePreview from "$lib/components/blocks/efferd/auth/auth-five/auth.svelte";
import AuthFourPreview from "$lib/components/blocks/efferd/auth/auth-four/auth.svelte";
import AuthOnePreview from "$lib/components/blocks/efferd/auth/auth-one/auth.svelte";
import AuthThreePreview from "$lib/components/blocks/efferd/auth/auth-three/auth.svelte";
import AuthTwoPreview from "$lib/components/blocks/efferd/auth/auth-two/auth.svelte";

// Raw
import appleSource from "$lib/assets/svg/brand/apple.svelte?raw";
import authAuthFiveAuthSource from "$lib/components/blocks/efferd/auth/auth-five/auth.svelte?raw";
import authAuthFourAuthSource from "$lib/components/blocks/efferd/auth/auth-four/auth.svelte?raw";
import authAuthOneAuthSource from "$lib/components/blocks/efferd/auth/auth-one/auth.svelte?raw";
import authAuthThreeAuthSource from "$lib/components/blocks/efferd/auth/auth-three/auth.svelte?raw";
import authAuthTwoAuthSource from "$lib/components/blocks/efferd/auth/auth-two/auth.svelte?raw";
import authDividerIndexSource from "$lib/components/ui/auth-divider/index.ts?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import floatingPathsIndexSource from "$lib/components/ui/floating-paths/index.ts?raw";
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import googleSource from "$lib/assets/svg/brand/google.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import particlesIndexSource from "$lib/components/ui/magic-ui/particles/index.ts?raw";

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
const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
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

export const authBlocks: BlockShowcaseItem[] = [
	{
		id: "auth-one",
		title: "Auth One",
		description:
			"Authentication components",
		previewComponent: AuthOnePreview,
		previewHref: "/preview/efferd/auth/auth-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-one",
		codeTree: createBlockCodeTree("auth-one", [
			{
				id: "auth-one",
				path: "src/lib/components/blocks/efferd/auth/auth-one/auth.svelte",
				lang: "svelte",
				code: authAuthOneAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	},	{
		id: "auth-two",
		title: "Auth Two",
		description:
			"Authentication components",
		previewComponent: AuthTwoPreview,
		previewHref: "/preview/efferd/auth/auth-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-two",
		codeTree: createBlockCodeTree("auth-two", [
			{
				id: "auth-two",
				path: "src/lib/components/blocks/efferd/auth/auth-two/auth.svelte",
				lang: "svelte",
				code: authAuthTwoAuthSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},	{
		id: "auth-three",
		title: "Auth Three",
		description:
			"Authentication components",
		previewComponent: AuthThreePreview,
		previewHref: "/preview/efferd/auth/auth-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-three",
		codeTree: createBlockCodeTree("auth-three", [
			{
				id: "auth-three",
				path: "src/lib/components/blocks/efferd/auth/auth-three/auth.svelte",
				lang: "svelte",
				code: authAuthThreeAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	},	{
		id: "auth-four",
		title: "Auth Four",
		description:
			"Authentication components",
		previewComponent: AuthFourPreview,
		previewHref: "/preview/efferd/auth/auth-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-four",
		codeTree: createBlockCodeTree("auth-four", [
			{
				id: "auth-four",
				path: "src/lib/components/blocks/efferd/auth/auth-four/auth.svelte",
				lang: "svelte",
				code: authAuthFourAuthSource
			},
			...buttonFiles,
			...dividerFiles,
			...logoFiles
		])
	},	{
		id: "auth-five",
		title: "Auth Five",
		description:
			"Authentication components",
		previewComponent: AuthFivePreview,
		previewHref: "/preview/efferd/auth/auth-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-five",
		codeTree: createBlockCodeTree("auth-five", [
			{
				id: "auth-five",
				path: "src/lib/components/blocks/efferd/auth/auth-five/auth.svelte",
				lang: "svelte",
				code: authAuthFiveAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	}
];

export function getAuthBlock(id: string) {
	return authBlocks.find((block) => block.id === id);
}
