import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import LogoOne from "$lib/components/blocks/blocks_main/logocloud/logocloud-one.svelte";
import LogoTwo from "$lib/components/blocks/blocks_main/logocloud/logocloud-two.svelte";
import LogoThree from "$lib/components/blocks/blocks_main/logocloud/logocloud-three.svelte";

// Code
import LogoOneCode from "$lib/components/blocks/blocks_main/logocloud/logocloud-one.svelte?raw";
import LogoTwoCode from "$lib/components/blocks/blocks_main/logocloud/logocloud-two.svelte?raw";
import LogoThreeCode from "$lib/components/blocks/blocks_main/logocloud/logocloud-three.svelte?raw";

let codes = [LogoOneCode, LogoTwoCode, LogoThreeCode];
let components = [LogoOne, LogoTwo, LogoThree];

export let logocloud: Block[] = getBlock(components.length, "logocloud", codes, components);
