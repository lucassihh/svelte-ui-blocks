import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import PricingOne from "$lib/components/blocks/blocks_main/pricing/pricing-one.svelte";
import PricingTwo from "$lib/components/blocks/blocks_main/pricing/pricing-two.svelte";
import PricingThree from "$lib/components/blocks/blocks_main/pricing/pricing-three.svelte";
import PricingFour from "$lib/components/blocks/blocks_main/pricing/pricing-four.svelte";
import PricingFive from "$lib/components/blocks/blocks_main/pricing/pricing-five.svelte";

// Code
import PricingOneCode from "$lib/components/blocks/blocks_main/pricing/pricing-one.svelte?raw";
import PricingTwoCode from "$lib/components/blocks/blocks_main/pricing/pricing-two.svelte?raw";
import PricingThreeCode from "$lib/components/blocks/blocks_main/pricing/pricing-three.svelte?raw";
import PricingFourCode from "$lib/components/blocks/blocks_main/pricing/pricing-four.svelte?raw";
import PricingFiveCode from "$lib/components/blocks/blocks_main/pricing/pricing-five.svelte?raw";

let codes = [PricingOneCode, PricingTwoCode, PricingThreeCode, PricingFourCode, PricingFiveCode];
let components = [PricingOne, PricingTwo, PricingThree, PricingFour, PricingFive];

export let pricing: Block[] = getBlock(components.length, "pricing", codes, components);
