<script>
	import {
		GoogleIcon,
		VercelIcon,
		AppleIcon,
		GithubIcon,
		OpenaiIcon,
		ClerkIcon,
		ClaudeIcon,
		SupabaseIcon
	} from "$lib/assets/svg/index.ts";
</script>

<section data-theme="veil" class="@container bg-background py-12">
	<div class="mx-auto max-w-xl px-6">
		<div
			class="grid grid-cols-4 gap-x-8 gap-y-12 p-4 *:flex *:items-center *:justify-center **:fill-foreground @xl:grid-cols-4"
		>
			<div>
				<GoogleIcon class="h-3.5 w-full" />
			</div>
			<div>
				<VercelIcon class="h-4.5 w-full" />
			</div>

			<div>
				<AppleIcon class="h-5" />
			</div>
			<div>
				<GithubIcon class="h-3.5 w-full" />
			</div>
			<div>
				<OpenaiIcon class="h-4 w-full" />
			</div>
			<div>
				<ClerkIcon class="size-4" />
			</div>
			<div>
				<ClaudeIcon class="h-5 w-full" />
			</div>
			<div>
				<SupabaseIcon class="h-3.5 w-full" />
			</div>
		</div>
	</div>
</section>
