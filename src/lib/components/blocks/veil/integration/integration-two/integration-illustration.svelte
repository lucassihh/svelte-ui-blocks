<script>
	import {
		BoltIcon as Logo,
		ClerkIcon,
		FirebaseIcon,
		LinearIcon,
		SlackIcon,
		SupabaseIcon,
		VercelIcon
	} from "$lib/assets/svg/index.ts";
</script>

<div aria-hidden={true} class="relative mx-auto flex size-96 **:fill-foreground @max-md:scale-85">
	<!-- absolute  -->
	<div
		class="relative inset-0 m-auto flex size-12 items-center rounded-full bg-card shadow-sm ring shadow-black/6.5 ring-border *:m-auto"
	>
		<Logo class="size-5" />
	</div>
	<div class="absolute inset-0 flex rotate-120 items-center justify-between gap-12 *:-rotate-120">
		<div
			class="absolute inset-4 rounded-full border border-dashed border-border border-foreground/10"
		></div>

		<div
			class="relative flex size-9 items-center rounded-full border border-border bg-muted backdrop-blur *:m-auto"
		>
			<FirebaseIcon class="size-3.5" />
		</div>
		<div
			class="relative flex size-9 items-center rounded-full bg-card shadow-sm ring shadow-black/6.5 ring-border *:m-auto"
		>
			<SupabaseIcon class="size-3.5" />
		</div>
	</div>
	<div class="absolute inset-12 flex items-center justify-between gap-12">
		<div
			class="absolute inset-4 rounded-full border border-dashed border-border border-foreground/10"
		></div>

		<div
			class="relative flex size-9 items-center rounded-full border border-border bg-muted backdrop-blur *:m-auto"
		>
			<VercelIcon class="size-3.5" />
		</div>
		<div
			class="relative flex size-9 items-center rounded-full bg-card shadow-sm ring shadow-black/6.5 ring-border *:m-auto"
		>
			<SlackIcon class="size-3.5" />
		</div>
	</div>
	<div class="absolute inset-24 flex rotate-45 items-center justify-between gap-12 *:-rotate-45">
		<div
			class="absolute inset-4 rounded-full border border-dashed border-border border-foreground/10"
		></div>

		<div
			class="relative flex size-9 items-center rounded-full bg-card shadow-sm ring shadow-black/6.5 ring-border *:m-auto"
		>
			<ClerkIcon class="size-3.5" />
		</div>
		<div
			class="relative flex size-9 items-center rounded-full border border-border bg-muted backdrop-blur *:m-auto"
		>
			<LinearIcon class="size-3.5" />
		</div>
	</div>
</div>
