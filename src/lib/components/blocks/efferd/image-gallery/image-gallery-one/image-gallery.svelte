<script lang="ts">
	import LazyImage from "./lazy-image.svelte";

	type GalleryImage = {
		id: string;
		alt: string;
		src: string;
		fallback: string;
		ratio: number;
	};

  // Image Imports
  import Landscape1 from "$lib/assets/img/landscape-1.jpg";
  import Landscape2 from "$lib/assets/img/landscape-2.jpg";
  import Landscape3 from "$lib/assets/img/landscape-3.jpg";
  import Landscape4 from "$lib/assets/img/landscape-4.jpg";
  import Landscape5 from "$lib/assets/img/landscape-5.jpg";
  import Landscape6 from "$lib/assets/img/landscape-6.jpg";
  import Landscape7 from "$lib/assets/img/landscape-7.jpg";
  
  
// Fallback
  const fallbackImage = "https://placehold.co/640x360?text=fallback-image";

// Gallery Array
  const imagesGallery: GalleryImage[] = [
		{
      id: "1",
			alt: "Design Systems That Scale",
			src: Landscape1,
      fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "2",
			alt: "The Psychology of Color in UI",
			src: Landscape2,
			fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "3",
			alt: "Microinteractions That Delight",
			src: Landscape3,
			fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "4",
			alt: "Accessibility Beyond Compliance",
			src: Landscape4,
			fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "5",
			alt: "Dark Mode Done Right",
			src: Landscape5,
			fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "6",
			alt: "Typography That Speaks",
			src: Landscape6,
			fallback: fallbackImage,
      ratio: 16 / 9
		},
		{
      id: "7",
			alt: "The Future of UI Animation",
			src: Landscape7,
			fallback: fallbackImage,
      ratio: 16 / 9
    }
	];


  /* Using Pcsum 
	function getOrientation(column: number, index: number) {
		const seed = Math.sin((column + 1) * 97 + (index + 1) * 131) * 10_000;
		return seed - Math.floor(seed) > 0.5;
	}

	function createImage(column: number, index: number): GalleryImage {
		const isPortrait = getOrientation(column, index);
		const width = isPortrait ? 1080 : 1920;
		const height = isPortrait ? 1920 : 1080;

		return {
			id: `${column}-${index}`,
			alt: `Image ${column}-${index}`,
			fallback: `https://placehold.co/${width}x${height}/`,
			ratio: isPortrait ? 9 / 16 : 16 / 9,
			src: `https://picsum.photos/seed/${column}-${index}/${width}/${height}`
		};
	}

	const columns = Array.from({ length: 4 }, (_, column) =>
		Array.from({ length: 8 }, (_, index) => createImage(column, index))
	);
  */
</script>

<section class="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
	<div
		class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
	>
		{#each imagesGallery as image}
			<div class="grid gap-4">
					<LazyImage
						alt={image.alt}
						containerClassName="rounded-xl"
						fallback={image.fallback}
						inView={true}
						ratio={image.ratio}
						src={image.src}
					/>
			</div>
		{/each}
	</div>
</section>
