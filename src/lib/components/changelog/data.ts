// Types TS
export type ChangelogChip = {
	label: string;
	href: string;
};

export type ChangelogEntry = {
	id: string;
	date: string;
	sortDate: string;
	title: string;
	description?: string;
	bullets?: string[];
	chips?: ChangelogChip[];
};

export type ChangelogPageData = {
	title: string;
	description: string;
	entries: ChangelogEntry[];
};


// Changlogs Data
export const changelogPageData: ChangelogPageData = {
	title: "Changelog",
	description: "Latest updates",
	entries: [
		{
			id: "2026-01",
			date: "Juny 2026",
			sortDate: "2026-04-20",
			title: "New Blocks",
			description: "New Blocks Added.",
			chips: [
				{ label: "hero", href: "/blocks/hero" },
				{ label: "contact", href: "/blocks/contact" },
				{ label: "faqs", href: "/blocks/faqs" },
				{ label: "footer", href: "/blocks/footer" },
				{ label: "pricing", href: "/blocks/pricing" },
				{ label: "auth", href: "/blocks/auth" }
			]
		},
        // TODO
		{
			id: '2026-02',
			date: 'Juny 2026',
			sortDate: '2026-04-19',
			title: 'Some Fixies',
			description: 'I made some improvements to the project.',
			bullets: [
				'Fix CodePreview',
				'Add Mobile Sidebar',
                'Add Docs Sidebar',
                'Fix Docs Header (Open Sidebar and Breadcrumb)',
                'Fix Footer Design',
                'Fix CategoryNavigation Design',
                'Add Scroll to Top In Docs & Hero',
                'Fix All Sidebar Active Links',
			]
		}
	]
};
