<script lang="ts">
	import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import { motion, AnimatePresence } from "motion-sv";

	type AnimationStyle =
		| "from-bottom"
		| "from-center"
		| "from-top"
		| "from-left"
		| "from-right"
		| "fade"
		| "top-in-bottom-out"
		| "left-in-right-out";

	type LazyImageProps = {
		alt: string;
		src: string;
		class?: string;
		containerClassName?: string;
		fallback?: string;
		ratio: number;
		inView?: boolean;
		allowFullscreen?: boolean;
		animationStyle?: AnimationStyle;
	};

	let {
		alt,
		src,
		class: className,
		containerClassName,
		fallback,
		ratio,
		inView = false,
		allowFullscreen = true,
		animationStyle = "from-center"
	}: LazyImageProps = $props();

	let imageRef = $state<HTMLImageElement | null>(null);
	let fallbackSource = $state<string | undefined>(undefined);
	let isLoading = $state(true);
	let lastSource: string | undefined = undefined;
	let revealStartFrame: number | null = null;
	let revealCommitFrame: number | null = null;

	let isOpen = $state(false);

	const animationVariants = {
		"from-bottom": {
			initial: { y: "100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "100%", opacity: 0 }
		},
		"from-center": {
			initial: { scale: 0.5, opacity: 0 },
			animate: { scale: 1, opacity: 1 },
			exit: { scale: 0.5, opacity: 0 }
		},
		"from-top": {
			initial: { y: "-100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "-100%", opacity: 0 }
		},
		"from-left": {
			initial: { x: "-100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "-100%", opacity: 0 }
		},
		"from-right": {
			initial: { x: "100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "100%", opacity: 0 }
		},
		fade: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 }
		},
		"top-in-bottom-out": {
			initial: { y: "-100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "100%", opacity: 0 }
		},
		"left-in-right-out": {
			initial: { x: "-100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "100%", opacity: 0 }
		}
	};

	const selectedAnimation = $derived(animationVariants[animationStyle]);
	let imageSource = $derived(fallbackSource ?? src);

	function handleError() {
		if (fallback && imageSource !== fallback) {
			fallbackSource = fallback;
			return;
		}

		cancelReveal();
		isLoading = false;
	}

	function handleLoad() {
		scheduleReveal();
	}

	function cancelReveal() {
		if (revealStartFrame !== null) {
			cancelAnimationFrame(revealStartFrame);
			revealStartFrame = null;
		}

		if (revealCommitFrame !== null) {
			cancelAnimationFrame(revealCommitFrame);
			revealCommitFrame = null;
		}
	}

	function scheduleReveal() {
		cancelReveal();

		revealStartFrame = requestAnimationFrame(() => {
			revealStartFrame = null;
			revealCommitFrame = requestAnimationFrame(() => {
				revealCommitFrame = null;
				isLoading = false;
			});
		});
	}

	function toggleFullscreen() {
		if (allowFullscreen && !isLoading) {
			isOpen = !isOpen;
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
			isOpen = false;
		}
	}

	$effect(() => {
		if (src) {
			fallbackSource = undefined;
		}
	});

	$effect(() => {
		if (imageSource !== lastSource) {
			cancelReveal();
			lastSource = imageSource;
			if (imageSource) {
				isLoading = true;
			}
		}
	});

	$effect(() => {
		if (imageSource && imageRef?.complete && isLoading) {
			scheduleReveal();
		}
	});

	$effect(() => {
		return () => {
			cancelReveal();
		};
	});
</script>

<AspectRatio
	class={cn(
		"relative size-full overflow-hidden border border-border bg-accent/30",
		allowFullscreen && "cursor-pointer",
		containerClassName
	)}
	{ratio}
>
	{#if imageSource}
		<button
			type="button"
			class="size-full text-left border-0 bg-transparent p-0"
			onclick={toggleFullscreen}
			disabled={!allowFullscreen}
		>
			<img
				bind:this={imageRef}
				{alt}
				class={cn(
					"size-full object-cover transition-all duration-500 hover:brightness-[0.9]",
					isLoading ? "opacity-0" : "opacity-100",
					className
				)}
				decoding="async"
				fetchpriority={inView ? "high" : "low"}
				loading="lazy"
				onerror={handleError}
				onload={handleLoad}
				src={imageSource}
			/>
		</button>
	{/if}
</AspectRatio>

<AnimatePresence>
	{#if isOpen && imageSource}
		<!-- Overlay / Backdrop -->
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			role="button"
			tabindex={0}
			onkeydown={handleKeyDown}
			onclick={() => (isOpen = false)}
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
		>
			<!-- Modal Content -->
			<motion.div
				initial={selectedAnimation.initial}
				animate={selectedAnimation.animate}
				exit={selectedAnimation.exit}
				transition={{ type: "spring", damping: 30, stiffness: 300 }}
				class="relative mx-4 max-h-[90vh] max-w-5xl md:mx-0"
			>
				<!-- Close Btn -->
				<Button
					variant="secondary"
          size="icon"
					aria-label="Close"
					onclick={() => (isOpen = false)}
					class="absolute -top-12 right-0"
				>
					<svg
						class="size-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</Button>

				<!-- Extended Image Container -->
				<div
					class="relative isolate z-[1] overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl"
				>
					<img
						src={imageSource}
						{alt}
						class="max-h-[80vh] w-full object-contain rounded-2xl bg-black/40"
					/>
				</div>
			</motion.div>
		</motion.div>
	{/if}
</AnimatePresence>
