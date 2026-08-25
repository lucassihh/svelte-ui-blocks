// Imports for efferd-ui
import { heroBlocks } from "./efferd-ui/hero";
import { headerBlocks } from "./efferd-ui/header";
import { logoCloudBlocks } from "./efferd-ui/logo-cloud";
import { featureBlocks } from "./efferd-ui/feature";
import { integrationBlocks } from "./efferd-ui/integration";
import { testimonialBlocks } from "./efferd-ui/testimonial";
import { ctaBlocks } from "./efferd-ui/cta";
import { pricingBlocks } from "./efferd-ui/pricing";
import { blogBlocks } from "./efferd-ui/blog";
import { authBlocks } from "./efferd-ui/auth";
import { faqBlocks } from "./efferd-ui/faq";
import { contactBlocks } from "./efferd-ui/contact";
import { footerBlocks } from "./efferd-ui/footer";
import { imageGalleryBlocks } from "./efferd-ui/image-gallery";
import { notFoundBlocks } from "./efferd-ui/not-found";

// Exports
export const registry = {
	"efferd-ui": {
		hero: heroBlocks,
		header: headerBlocks,
		logoCloud: logoCloudBlocks,
		feature: featureBlocks,
		integration: integrationBlocks,
		testimonial: testimonialBlocks,
		cta: ctaBlocks,
		pricing: pricingBlocks,
		blog: blogBlocks,
		auth: authBlocks,
		faq: faqBlocks,
		contact: contactBlocks,
		footer: footerBlocks,
		imageGallery: imageGalleryBlocks,
		notFound: notFoundBlocks
	}
};

/* So you can import like this in any page
    
    import { registry } from "$lib/registry";
    const efferd = registry["efferd-ui"];
    
*/
