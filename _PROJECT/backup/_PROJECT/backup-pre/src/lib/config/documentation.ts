import type { SEO } from "$lib/types/seo";

export type DocsV2GroupKey = "guide" | "theme" | "resources";

export type DocsV2PageKey =
	| "introduction"
	| "installation"
	| "Theme"
  | "Templates";

export type DocsV2PageMeta = {
	key: DocsV2PageKey;
	path: string;
	navTitle: string;
	group: DocsV2GroupKey;
	toc?: boolean;
	seo: SEO;
};

export type DocsV2NavItem = {
	title: string;
	url: string;
	badge?: string;
	external?: boolean;
};


const docsKeywords = [
	"svelte",
	"sveltekit",
	"svelte 5",
	"shadcn-svelte",
	"tailwind css",
	"marketing blocks",
];



// Items
export const docsV2PageMap: Record<DocsV2PageKey, DocsV2PageMeta> = {
	
  // ---- Documentation Group ----
  introduction: {
		key: "introduction",
		path: "/documentation",
		navTitle: "Introduction",
		group: "documentation",
		toc: true,
		seo: {
			title: "Docs Introduction",
			description:
				"Overview of Svelte Shadcn Blocks, supported variants, and how to get started quickly.",
			keywords: [...docsKeywords, "introduction", "overview"],
		},
	},
  
	installation: {
		key: "installation",
		path: "/documentation/installation",
		navTitle: "Installation",
		group: "documentation",
		toc: true,
		seo: {
			title: "Docs Installation",
			description:
				"Install and configure Svelte Shadcn Blocks with shadcn-svelte and jsrepo CLI.",
			keywords: [...docsKeywords, "installation", "jsrepo"],
		},
	},
  
  
  
  // ---- Theme Group ----
	veilTheme: {
		key: "Theme",
		path: "/documentation/veil-theme",
		navTitle: "Theme Setup",
		group: "theme",
		toc: true,
		seo: {
			title: "Theme Setup",
			description:
				"Apply Veil theme tokens and update button, card, input, and textarea primitives for consistent UI styling.",
			keywords: [
				...docsKeywords,
				"theme setup",
        "Customization",
				"theme variables",
			],
		},
	},
  
  
  // ---- Templates Group ----
	templates: {
		key: "templates",
		path: "/templates",
		navTitle: "Buy a Template",
		group: "templates",
		toc: true,
		seo: {
			title: "Templates",
			description:
				"Ready to use templates for your project",
			keywords: [...docsKeywords, "templates", "community"],
		},
	},
  
  
};

export const docsV2Pages = Object.values(docsV2PageMap);

// documentation Map
export const documentationData: DocsV2NavItem[] = docsV2Pages
	.filter((item) => item.group === "documentation")
	.map((item) => ({
		title: item.navTitle,
		url: item.path,
	}));

// Theme Map
export const themeData: DocsV2NavItem[] = docsV2Pages
	.filter((item) => item.group === "theme")
	.map((item) => ({
		title: item.navTitle,
		url: item.path,
	}));

// Templates Map
export const templatesData: DocsV2NavItem[] = docsV2Pages
	.filter((item) => item.group === "templates")
	.map((item) => ({
		title: item.navTitle,
		url: item.path,
	}));