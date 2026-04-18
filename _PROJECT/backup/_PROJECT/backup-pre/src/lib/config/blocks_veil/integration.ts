import type { MistBlock } from "$lib/types/mists";

import IntegrationOne from "$lib/components/blocks/blocks_veil/integration/integration-one.svelte";
import IntegrationOneCode from "$lib/components/blocks/blocks_veil/integration/integration-one.svelte?raw";
import IntegrationTwo from "$lib/components/blocks/blocks_veil/integration/integration-two.svelte";
import IntegrationTwoCode from "$lib/components/blocks/blocks_veil/integration/integration-two.svelte?raw";

export const all_veils_integration: MistBlock[] = [
	{
		slug: "integration-one",
		title: "Integration One",
		category: "integration",
		preview: "/preview/blocks_veil/integration/integration-one",
		itemId: "veil-integration-one",
		code: {
			code: IntegrationOneCode,
			lang: "svelte",
		},
		component: IntegrationOne,
	},
	{
		slug: "integration-two",
		title: "Integration Two",
		category: "integration",
		preview: "/preview/blocks_veil/integration/integration-two",
		itemId: "veil-integration-two",
		code: {
			code: IntegrationTwoCode,
			lang: "svelte",
		},
		component: IntegrationTwo,
	},
];
