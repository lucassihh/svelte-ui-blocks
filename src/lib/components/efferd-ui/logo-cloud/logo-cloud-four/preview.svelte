<script>
	import LogoCloudFour from "./logo-cloud.svelte";
</script>

<div class="p-4 min-h-screen w-full place-content-center">
	<div class="w-full">
		<h2 class="mb-5 text-center">
			<span class="text-2xl font-medium block text-muted-foreground"> Already used by </span>
			<span class="text-2xl font-black tracking-tight md:text-3xl text-primary">
				Best in the Game
			</span>
		</h2>
		<div class="max-w-3xl relative mx-auto *:border-y-0">
			<div
				class="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
			></div>
			<LogoCloudFour />
			<div
				class="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
			></div>
		</div>
	</div>
</div>
