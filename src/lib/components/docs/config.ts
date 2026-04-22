export type DocsPage = {
	title: string;
	description: string;
	href: string;
	section: "primary" | "secondary";
};

const docsPages = [
	{
		title: "Introduction",
		description: "What Efferd is, what is included, and where to start exploring.",
		href: "/documentation",
		section: "primary"
	},
	{
		title: "Installation",
		description: "Set up the registry flow and start adding blocks to your project.",
		href: "/documentation/installation",
		section: "primary"
	},
	{
		title: "Usage",
		description: "Browse blocks, choose a variant, install it, and customize it locally.",
		href: "/documentation/usage",
		section: "primary"
	},
	{
		title: "Templates",
		description: "A placeholder for the template system that is planned next.",
		href: "/documentation/templates",
		section: "secondary"
	},
	{
		title: "Sponsors & Support",
		description: "Support the project, share it, or reach out to the owner.",
		href: "/documentation/sponsors-support",
		section: "secondary"
	},
	{
		title: "Roadmap & Feedback",
		description: "See what is planned next and where to send feedback.",
		href: "/documentation/roadmap-feedback",
		section: "secondary"
	}
] as const satisfies readonly DocsPage[];

export const docsPrimaryPages = docsPages.filter((page) => page.section === "primary");

export const docsSecondaryPages = docsPages.filter((page) => page.section === "secondary");

export const docsPagesByHref = new Map<string, DocsPage>(
	docsPages.map((page) => [page.href, page] satisfies [string, DocsPage])
);

export const docsSupportLinks = {
	githubRepo: "#",
	githubIssues: "#",
	xProfile: "#",
	xShare: "#"
} as const;


// Normalize path
export function normalizeDocsPath(pathname: string) {
    if (!pathname) return "/";
    // Remove duplicates "/"
    const normalized = pathname.replace(/\/+$/, "") || "/";
    return normalized;
}

// Get Docs Page
export function getDocsPage(pathname: string) {
	return docsPagesByHref.get(normalizeDocsPath(pathname)) ?? docsPages[0];
}

export { docsPages };
