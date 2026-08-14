<script lang="ts">
	import LogoCloudTwo from "./logo-cloud.svelte";
</script>

<div class="px-4 min-h-screen w-full place-content-center">
	<section class="max-w-3xl py-12 relative mx-auto">
		<h2
			class="mb-6 text-lg font-medium tracking-tight md:text-2xl text-center text-muted-foreground"
		>
			Companies we{" "}
			<span class="font-semibold text-primary">collaborate</span> with.
		</h2>
		<div class="max-w-3xl relative mx-auto *:border-y-0"></div>
		<div
			class="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
		></div>
		<LogoCloudTwo />
		<div
			class="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
		></div>
	</section>
</div>
