import type { Component } from "svelte";

// Types
type NavLink = {
	label: string;
	href: string;
};

// Nav Links
export const navLinks: NavLink[] = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Efferd-UI Blocks",
		href: "/blocks/efferd-ui/hero"
	},
	{
		label: "Magic-UI Components",
		href: "/blocks/magic-ui/animated-beam"
	},
	{
		label: "Documentation",
		href: "/documentation"
	},
	{
		label: "Changelog",
		href: "/changelog"
	}
] as const;
