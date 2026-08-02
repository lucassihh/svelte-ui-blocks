// Imports for efferd-ui
import { heroBlocks } from "./efferd-ui/hero";
import { headerBlocks } from "./efferd-ui/header";
import { logoCloudBlocks } from "./efferd-ui/logo_cloud";
import { featuresBlocks } from "./efferd-ui/features";
import { integrationsBlocks } from "./efferd-ui/integrations";
import { testimonialsBlocks } from "./efferd-ui/testimonials";
import { ctaBlocks } from "./efferd-ui/cta";
import { pricingBlocks } from "./efferd-ui/pricing";
import { blogBlocks } from "./efferd-ui/blog";
import { authBlocks } from "./efferd-ui/auth";
import { faqBlocks } from "./efferd-ui/faqs";
import { contactBlocks } from "./efferd-ui/contact";
import { footerBlocks } from "./efferd-ui/footer";
import { imageGalleryBlocks } from "./efferd-ui/image_gallery";
import { notFoundBlocks } from "./efferd-ui/not_found";

// Exports
export const registry = {
	"efferd-ui": {
		hero: heroBlocks,
		header: headerBlocks,
		logoCloud: logoCloudBlocks,
		features: featuresBlocks,
		integration: integrationsBlocks,
		testimonial: testimonialsBlocks,
		cta: ctaBlocks,
		pricing: pricingBlocks,
		blog: blogBlocks,
		auth: authBlocks,
		faqs: faqBlocks,
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
