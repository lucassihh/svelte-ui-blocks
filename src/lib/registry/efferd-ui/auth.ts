import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import AuthFivePreview from "$lib/components/efferd-ui/auth/auth-five/auth.svelte";
import AuthFourPreview from "$lib/components/efferd-ui/auth/auth-four/auth.svelte";
import AuthOnePreview from "$lib/components/efferd-ui/auth/auth-one/auth.svelte";
import AuthThreePreview from "$lib/components/efferd-ui/auth/auth-three/auth.svelte";
import AuthTwoPreview from "$lib/components/efferd-ui/auth/auth-two/auth.svelte";

import appleSource from "$lib/assets/svg/brand/apple.svelte?raw";
import authAuthFiveAuthSource from "$lib/components/efferd-ui/auth/auth-five/auth.svelte?raw";
import authAuthFourAuthSource from "$lib/components/efferd-ui/auth/auth-four/auth.svelte?raw";
import authAuthOneAuthSource from "$lib/components/efferd-ui/auth/auth-one/auth.svelte?raw";
import authAuthThreeAuthSource from "$lib/components/efferd-ui/auth/auth-three/auth.svelte?raw";
import authAuthTwoAuthSource from "$lib/components/efferd-ui/auth/auth-two/auth.svelte?raw";
import authDividerIndexSource from "$lib/components/ui/auth-divider/index.ts?raw";
import authDividerSource from "$lib/components/ui/auth-divider/auth-divider.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import floatingPathsIndexSource from "$lib/components/ui/floating-paths/index.ts?raw";
import floatingPathsSource from "$lib/components/ui/floating-paths/floating-paths.svelte?raw";
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import googleSource from "$lib/assets/svg/brand/google.svelte?raw";
import inputGroupAddonSource from "$lib/components/ui/input-group/input-group-addon.svelte?raw";
import inputGroupButtonSource from "$lib/components/ui/input-group/input-group-button.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import inputGroupInputSource from "$lib/components/ui/input-group/input-group-input.svelte?raw";
import inputGroupSource from "$lib/components/ui/input-group/input-group.svelte?raw";
import inputGroupTextSource from "$lib/components/ui/input-group/input-group-text.svelte?raw";
import inputGroupTextareaSource from "$lib/components/ui/input-group/input-group-textarea.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import particlesIndexSource from "$lib/components/magic-ui/particles/index.ts?raw";
import particlesSource from "$lib/components/magic-ui/particles/particles.svelte?raw";

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
		id: "auth-five",
		title: "Auth Five",
		description: "A Auth Five composition.",
		previewComponent: AuthFivePreview,
		previewHref: "/preview/efferd-ui/auth/auth-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-five",
		codeTree: createBlockCodeTree("auth-five:preview", [
			{
				id: "auth-five:auth",
				path: "components/efferd/auth/auth-five/auth.svelte",
				lang: "svelte",
				code: authAuthFiveAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	},
	{
		id: "auth-four",
		title: "Auth Four",
		description: "A Auth Four composition.",
		previewComponent: AuthFourPreview,
		previewHref: "/preview/efferd-ui/auth/auth-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-four",
		codeTree: createBlockCodeTree("auth-four:preview", [
			{
				id: "auth-four:auth",
				path: "components/efferd/auth/auth-four/auth.svelte",
				lang: "svelte",
				code: authAuthFourAuthSource
			},
			...buttonFiles,
			...dividerFiles,
			...logoFiles
		])
	},
	{
		id: "auth-one",
		title: "Auth One",
		description: "A Auth One composition.",
		previewComponent: AuthOnePreview,
		previewHref: "/preview/efferd-ui/auth/auth-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-one",
		codeTree: createBlockCodeTree("auth-one:preview", [
			{
				id: "auth-one:auth",
				path: "components/efferd/auth/auth-one/auth.svelte",
				lang: "svelte",
				code: authAuthOneAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	},
	{
		id: "auth-three",
		title: "Auth Three",
		description: "A Auth Three composition.",
		previewComponent: AuthThreePreview,
		previewHref: "/preview/efferd-ui/auth/auth-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-three",
		codeTree: createBlockCodeTree("auth-three:preview", [
			{
				id: "auth-three:auth",
				path: "components/efferd/auth/auth-three/auth.svelte",
				lang: "svelte",
				code: authAuthThreeAuthSource
			},
			...buttonFiles,
			...logoFiles
		])
	},
	{
		id: "auth-two",
		title: "Auth Two",
		description: "A Auth Two composition.",
		previewComponent: AuthTwoPreview,
		previewHref: "/preview/efferd-ui/auth/auth-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "auth-two",
		codeTree: createBlockCodeTree("auth-two:preview", [
			{
				id: "auth-two:auth",
				path: "components/efferd/auth/auth-two/auth.svelte",
				lang: "svelte",
				code: authAuthTwoAuthSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	}
];

export function getAuthBlock(id: string) {
	return authBlocks.find((block) => block.id === id);
}
