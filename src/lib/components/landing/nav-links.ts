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
		label: "Efferd Blocks",
		href: "/blocks/efferd/hero"
	},
	{
		label: "Veil Blocks",
		href: "/blocks/veil/call-to-action"
	},
	{
		label: "Magic Components",
		href: "/blocks/magic/animated-beam"
	},
	{
		label: "Fancy Components",
		href: "/blocks/fancy/animated-gradient-svg"
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
