<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import BlogCard from "./blog-card.svelte";

	type BlogType = {
		title: string;
		href: string;
		description: string;
		author: string;
		createdAt: string;
		readTime: string;
		image: string;
	};

  // Image Imports
  import Landscape1 from "$lib/assets/img/landscape-1.jpg";
  import Landscape2 from "$lib/assets/img/landscape-2.jpg";
  import Landscape3 from "$lib/assets/img/landscape-3.jpg";
  import Landscape4 from "$lib/assets/img/landscape-4.jpg";
  import Landscape5 from "$lib/assets/img/landscape-5.jpg";
  import Landscape6 from "$lib/assets/img/landscape-6.jpg";
  import Landscape7 from "$lib/assets/img/landscape-7.jpg";
  
	const blogs: BlogType[] = [
		{
			title: "Design Systems That Scale",
			href: "/",
			description:
				"Learn how to build and maintain scalable design systems that empower teams to move faster while staying consistent.",
			image: Landscape1,
			createdAt: "2025-08-25",
			author: "Ava Mitchell",
			readTime: "7 min read"
		},
		{
			title: "The Psychology of Color in UI",
			href: "/",
			description:
				"Explore how different colors influence user perception, emotion, and conversion in digital product design.",
			image: Landscape2,
			createdAt: "2025-07-14",
			author: "Liam Carter",
			readTime: "5 min read"
		},
		{
			title: "Microinteractions That Delight",
			href: "/",
			description:
				"Discover how subtle animations and interactions can enhance usability and bring joy to your users.",
			image: Landscape3,
			createdAt: "2025-06-30",
			author: "Sophia Kim",
			readTime: "6 min read"
		},
		{
			title: "Accessibility Beyond Compliance",
			href: "/",
			description:
				"Practical steps to make your UI accessible, not just legally compliant, but genuinely inclusive for everyone.",
			image: Landscape4,
			createdAt: "2025-06-18",
			author: "Ethan Rodriguez",
			readTime: "8 min read"
		},
		{
			title: "Dark Mode Done Right",
			href: "/",
			description:
				"Tips and tricks to design beautiful and functional dark mode experiences that users will love.",
			image: Landscape5,
			createdAt: "2025-05-20",
			author: "Maya Chen",
			readTime: "4 min read"
		},
		{
			title: "Typography That Speaks",
			href: "/",
			description:
				"How to select and pair typefaces that enhance readability, hierarchy, and brand personality.",
			image: Landscape6,
			createdAt: "2025-05-02",
			author: "Noah Patel",
			readTime: "9 min read"
		},
		{
			title: "The Future of UI Animation",
			href: "/",
			description:
				"From motion guidelines to advanced prototyping-discover where UI animation is headed in 2025.",
			image: Landscape7,
			createdAt: "2025-04-15",
			author: "Chloe Ramirez",
			readTime: "10 min read"
    }
	];
</script>

<div class="mx-auto w-full max-w-5xl grow">
	<div class="space-y-1 px-4 py-8 md:px-6">
		<h1 class="text-2xl font-semibold tracking-wide md:text-4xl">Blog Section</h1>
		<p class="text-sm text-muted-foreground md:text-base">
			Discover the latest trends and insights in the world of design and technology.
		</p>
	</div>

	<FullWidthDivider contained={true} />

	<div class="grid gap-2 p-4 md:grid-cols-2 lg:grid-cols-3">
		{#each blogs as blog}
			<BlogCard {...blog} />
		{/each}
	</div>
</div>
