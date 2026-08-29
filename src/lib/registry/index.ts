// Imports for efferd
import { authBlocks } from "./efferd/auth";
import { blogBlocks } from "./efferd/blog";
import { contactBlocks } from "./efferd/contact";
import { ctaBlocks } from "./efferd/cta";
import { faqBlocks } from "./efferd/faq";
import { featureBlocks } from "./efferd/feature";
import { footerBlocks } from "./efferd/footer";
import { headerBlocks } from "./efferd/header";
import { heroBlocks } from "./efferd/hero";
import { imageGalleryBlocks } from "./efferd/image-gallery";
import { integrationBlocks } from "./efferd/integration";
import { logoCloudBlocks } from "./efferd/logo-cloud";
import { notFoundBlocks } from "./efferd/not-found";
import { pricingBlocks } from "./efferd/pricing";
import { testimonialBlocks } from "./efferd/testimonial";

// Imports for magic
import { animatedBeamBlocks } from "./magic/animated-beam";
import { animatedGradientTextBlocks } from "./magic/animated-gradient-text";
import { animatedGridPatternBlocks } from "./magic/animated-grid-pattern";
import { animatedListBlocks } from "./magic/animated-list";
import { animatedProgressBarBlocks } from "./magic/animated-progress-bar";
import { animatedShinyTextBlocks } from "./magic/animated-shiny-text";
import { animatedThemeTogglerBlocks } from "./magic/animated-theme-toggler";
import { arcTimelineBlocks } from "./magic/arc-timeline";
import { auroraTextBlocks } from "./magic/aurora-text";
import { avatarCirclesBlocks } from "./magic/avatar-circles";
import { backlightBlocks } from "./magic/backlight";
import { blurFadeBlocks } from "./magic/blur-fade";
import { borderBeamBlocks } from "./magic/border-beam";
import { dockBlocks } from "./magic/dock";
import { dotPatternBlocks } from "./magic/dot-pattern";
import { fileTreeBlocks } from "./magic/file-tree";
import { flickeringGridBlocks } from "./magic/flickering-grid";
import { flowBlocks } from "./magic/flow";
import { glyphMatrixBlocks } from "./magic/glyph-matrix";
import { gridPatternBlocks } from "./magic/grid-pattern";
import { heroVideoDialogBlocks } from "./magic/hero-video-dialog";
import { hexagonPatternBlocks } from "./magic/hexagon-pattern";
import { hyperTextBlocks } from "./magic/hyper-text";
import { lensBlocks } from "./magic/lens";
import { lightRaysBlocks } from "./magic/light-rays";
import { lineShadowTextBlocks } from "./magic/line-shadow-text";
import { marqueeBlocks } from "./magic/marquee";
import { morphingTextBlocks } from "./magic/morphing-text";
import { noiseTextureBlocks } from "./magic/noise-texture";
import { numberTickerBlocks } from "./magic/number-ticker";
import { orbitingCirclesBlocks } from "./magic/orbiting-circles";
import { pixelImageBlocks } from "./magic/pixel-image";
import { pointerBlocks } from "./magic/pointer";
import { progressiveBlurBlocks } from "./magic/progressive-blur";
import { pulsatingButtonBlocks } from "./magic/pulsating-button";
import { rippleBlocks } from "./magic/ripple";
import { scrollProgressBlocks } from "./magic/scroll-progress";
import { separatorBlocks } from "./magic/separator";
import { shimmerButtonBlocks } from "./magic/shimmer-button";
import { shineBorderBlocks } from "./magic/shine-border";
import { sparklesTextBlocks } from "./magic/sparkles-text";
import { staggerTextBlocks } from "./magic/stagger-text";
import { stripedPatternBlocks } from "./magic/striped-pattern";
import { terminalBlocks } from "./magic/terminal";
import { textAnimateBlocks } from "./magic/text-animate";
import { typingAnimationBlocks } from "./magic/typing-animation";
import { videoTextBlocks } from "./magic/video-text";
import { wordRotateBlocks } from "./magic/word-rotate";

// Imports for fancy
import { animatedGradientSvgBlocks } from "./fancy/animated-gradient-svg";
import { letterSwapGoodBlocks } from "./fancy/letter-swap-good";
import { mediaBetweenTextBlocks } from "./fancy/media-between-text";
import { scrambleHoverBlocks } from "./fancy/scramble-hover";
import { scrambleInBlocks } from "./fancy/scramble-in";
import { textHighlighterBlocks } from "./fancy/text-highlighter";
import { textRotateBlocks } from "./fancy/text-rotate";
import { underlineToBackgroundBlocks } from "./fancy/underline-to-background";

// Exports
export const registry = {
	"efferd": {
		auth: authBlocks,
		blog: blogBlocks,
		contact: contactBlocks,
		cta: ctaBlocks,
		faq: faqBlocks,
		feature: featureBlocks,
		footer: footerBlocks,
		header: headerBlocks,
		hero: heroBlocks,
		imageGallery: imageGalleryBlocks,
		integration: integrationBlocks,
		logoCloud: logoCloudBlocks,
		notFound: notFoundBlocks,
		pricing: pricingBlocks,
		testimonial: testimonialBlocks
	},
	"magic": {
		animatedBeam: animatedBeamBlocks,
		animatedGradientText: animatedGradientTextBlocks,
		animatedGridPattern: animatedGridPatternBlocks,
		animatedList: animatedListBlocks,
		animatedProgressBar: animatedProgressBarBlocks,
		animatedShinyText: animatedShinyTextBlocks,
		animatedThemeToggler: animatedThemeTogglerBlocks,
		arcTimeline: arcTimelineBlocks,
		auroraText: auroraTextBlocks,
		avatarCircles: avatarCirclesBlocks,
		backlight: backlightBlocks,
		blurFade: blurFadeBlocks,
		borderBeam: borderBeamBlocks,
		dock: dockBlocks,
		dotPattern: dotPatternBlocks,
		fileTree: fileTreeBlocks,
		flickeringGrid: flickeringGridBlocks,
		flow: flowBlocks,
		glyphMatrix: glyphMatrixBlocks,
		gridPattern: gridPatternBlocks,
		heroVideoDialog: heroVideoDialogBlocks,
		hexagonPattern: hexagonPatternBlocks,
		hyperText: hyperTextBlocks,
		lens: lensBlocks,
		lightRays: lightRaysBlocks,
		lineShadowText: lineShadowTextBlocks,
		marquee: marqueeBlocks,
		morphingText: morphingTextBlocks,
		noiseTexture: noiseTextureBlocks,
		numberTicker: numberTickerBlocks,
		orbitingCircles: orbitingCirclesBlocks,
		pixelImage: pixelImageBlocks,
		pointer: pointerBlocks,
		progressiveBlur: progressiveBlurBlocks,
		pulsatingButton: pulsatingButtonBlocks,
		ripple: rippleBlocks,
		scrollProgress: scrollProgressBlocks,
		separator: separatorBlocks,
		shimmerButton: shimmerButtonBlocks,
		shineBorder: shineBorderBlocks,
		sparklesText: sparklesTextBlocks,
		staggerText: staggerTextBlocks,
		stripedPattern: stripedPatternBlocks,
		terminal: terminalBlocks,
		textAnimate: textAnimateBlocks,
		typingAnimation: typingAnimationBlocks,
		videoText: videoTextBlocks,
		wordRotate: wordRotateBlocks
	},
	"fancy": {
		animatedGradientSvg: animatedGradientSvgBlocks,
		letterSwapGood: letterSwapGoodBlocks,
		mediaBetweenText: mediaBetweenTextBlocks,
		scrambleHover: scrambleHoverBlocks,
		scrambleIn: scrambleInBlocks,
		textHighlighter: textHighlighterBlocks,
		textRotate: textRotateBlocks,
		underlineToBackground: underlineToBackgroundBlocks
	}
} as const;

export type RegistryKey = keyof typeof registry;

/* So you can import like this in any page:

    import { registry } from "$lib/registry";
    const efferd = registry["efferd-ui"];
*/
