// Types Ts
export type DocsPage = {
	title: string;
	description: string;
	href: string;
};

// Get start Links
export const getstart: DocsPage[] = [
	{
		title: "Introduction",
		description: "What Efferd is, what is included, and where to start exploring.",
		href: "/documentation"
	},
	{
		title: "Installation",
		description: "Set up the registry flow and start adding blocks to your project.",
		href: "/documentation/installation"
	},
	{
		title: "Usage",
		description: "Browse blocks, choose a variant, install it, and customize it locally.",
		href: "/documentation/usage"
	},
	{
		title: "Example Markdown",
		description: "Write a documentation using markdown style",
		href: "/documentation/example-markdown"
	}
];
