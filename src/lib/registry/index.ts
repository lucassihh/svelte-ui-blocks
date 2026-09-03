// Imports for efferd
import { authBlocks } from "./efferd/auth";
import { blogBlocks } from "./efferd/blog";
import { contactBlocks as efferdContactBlocks } from "./efferd/contact";
import { ctaBlocks } from "./efferd/cta";
import { faqBlocks } from "./efferd/faq";
import { featureBlocks } from "./efferd/feature";
import { footerBlocks as efferdFooterBlocks } from "./efferd/footer";
import { headerBlocks as efferdHeaderBlocks } from "./efferd/header";
import { heroBlocks as efferdHeroBlocks } from "./efferd/hero";
import { imageGalleryBlocks } from "./efferd/image-gallery";
import { integrationBlocks as efferdIntegrationBlocks } from "./efferd/integration";
import { logoCloudBlocks as efferdLogoCloudBlocks } from "./efferd/logo-cloud";
import { notFoundBlocks } from "./efferd/not-found";
import { pricingBlocks as efferdPricingBlocks } from "./efferd/pricing";
import { testimonialBlocks as efferdTestimonialBlocks } from "./efferd/testimonial";

// Imports for fancy
import { animatedGradientSvgBlocks } from "./fancy/animated-gradient-svg";
import { letterSwapGoodBlocks } from "./fancy/letter-swap-good";
import { mediaBetweenTextBlocks } from "./fancy/media-between-text";
import { scrambleHoverBlocks } from "./fancy/scramble-hover";
import { scrambleInBlocks } from "./fancy/scramble-in";
import { textHighlighterBlocks } from "./fancy/text-highlighter";
import { textRotateBlocks } from "./fancy/text-rotate";
import { underlineToBackgroundBlocks } from "./fancy/underline-to-background";

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

// Imports for veil
import { callToActionBlocks } from "./veil/call-to-action";
import { comparatorBlocks } from "./veil/comparator";
import { contactBlocks as veilContactBlocks } from "./veil/contact";
import { contentBlocks } from "./veil/content";
import { faqsBlocks } from "./veil/faqs";
import { featuresBlocks } from "./veil/features";
import { footerBlocks as veilFooterBlocks } from "./veil/footer";
import { forgotPasswordBlocks } from "./veil/forgot-password";
import { headerBlocks as veilHeaderBlocks } from "./veil/header";
import { heroBlocks as veilHeroBlocks } from "./veil/hero";
import { integrationBlocks as veilIntegrationBlocks } from "./veil/integration";
import { loginBlocks } from "./veil/login";
import { logoCloudBlocks as veilLogoCloudBlocks } from "./veil/logo-cloud";
import { pricingBlocks as veilPricingBlocks } from "./veil/pricing";
import { signupBlocks } from "./veil/signup";
import { statsBlocks } from "./veil/stats";
import { teamBlocks } from "./veil/team";
import { testimonialBlocks as veilTestimonialBlocks } from "./veil/testimonial";

// Exports
export const registry = {
	"efferd": {
		auth: authBlocks,
		blog: blogBlocks,
		contact: efferdContactBlocks,
		cta: ctaBlocks,
		faq: faqBlocks,
		feature: featureBlocks,
		footer: efferdFooterBlocks,
		header: efferdHeaderBlocks,
		hero: efferdHeroBlocks,
		imageGallery: imageGalleryBlocks,
		integration: efferdIntegrationBlocks,
		logoCloud: efferdLogoCloudBlocks,
		notFound: notFoundBlocks,
		pricing: efferdPricingBlocks,
		testimonial: efferdTestimonialBlocks
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
	"veil": {
		callToAction: callToActionBlocks,
		comparator: comparatorBlocks,
		contact: veilContactBlocks,
		content: contentBlocks,
		faqs: faqsBlocks,
		features: featuresBlocks,
		footer: veilFooterBlocks,
		forgotPassword: forgotPasswordBlocks,
		header: veilHeaderBlocks,
		hero: veilHeroBlocks,
		integration: veilIntegrationBlocks,
		login: loginBlocks,
		logoCloud: veilLogoCloudBlocks,
		pricing: veilPricingBlocks,
		signup: signupBlocks,
		stats: statsBlocks,
		team: teamBlocks,
		testimonial: veilTestimonialBlocks
	}
} as const;

export type RegistryKey = keyof typeof registry;

/* So you can import like this in any page:

    import { registry } from "$lib/registry";
    const efferd = registry["efferd"];
*/
