<script lang="ts">
	import LazyImage from "./lazy-image.svelte";

	type GalleryImage = {
		id: string;
		alt: string;
		src: string;
		fallback: string;
		ratio: number;
	};

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
</script>

<section class="px-4 py-10 relative flex min-h-screen w-full flex-col items-center justify-center">
	<div
		class="max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6 mx-auto grid w-full grid-cols-1"
	>
		{#each columns as column, columnIndex (columnIndex)}
			<div class="gap-4 grid">
				{#each column as image (image.id)}
					<LazyImage
						alt={image.alt}
						containerClassName="rounded-xl"
						fallback={image.fallback}
						inView={true}
						ratio={image.ratio}
						src={image.src}
					/>
				{/each}
			</div>
		{/each}
	</div>
</section>
