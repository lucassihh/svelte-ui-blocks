<script lang="ts">
	import DocsBreadcrumb from "./docs-breadcrumb.svelte";

	import { Button } from "$lib/components/ui/button";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	// Icons
	import { PanelBottomOpen } from "@lucide/svelte/icons";

	// For Custom Docs Sidebar Btn
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	const sidebar = useSidebar();
</script>

<div
	class="w-full border-b border-dashed bg-background/80 px-4 py-3 backdrop-blur-xs md:rounded-t-xl"
>
	<div class="flex items-center gap-4">
		<!-- Docs Sidebar Btn Trigger -->
		<Button
			class="bg-transparent text-primary md:hidden lg:hidden"
			size="icon-sm"
			onclick={() => sidebar.toggle()}
		>
			<PanelBottomOpen class="size-4" />
			<span class="sr-only">Toggle Docs Sidebar</span>
		</Button>

		<!-- Breadcrumb -->
		<DocsBreadcrumb />
	</div>
</div>
