<script lang="ts">
	import { ChevronLeftIcon } from "@lucide/svelte";
	import { Particles } from "$lib/components/ui-blocks/magic-ui/particles";
	import { Button } from "$lib/components/ui/button";

	// SVG
	import GithubLogo from "$lib/assets/svg/social/github.svelte";
	import GoogleLogo from "$lib/assets/svg/brand/google.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";

	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthOneProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		homeHref?: string;
		termsHref?: string;
		privacyHref?: string;
	};

	let {
		class: className = "",
		homeHref = "/",
		termsHref = "/",
		privacyHref = "/",
		...restProps
	}: AuthOneProps = $props();
</script>

<div class={cn("md:h-screen md:overflow-hidden relative w-full", className)} {...restProps}>
	<Particles class="inset-0 absolute" color="#666666" ease={20} quantity={120} />

	<div class="max-w-5xl px-8 relative mx-auto flex min-h-screen flex-col justify-center">
		<Button class="top-4 left-4 absolute" href={homeHref} variant="ghost">
			<ChevronLeftIcon data-icon="inline-start" />
			Home
		</Button>

		<div class="max-w-sm space-y-4 mx-auto w-full">
			<Logo class="h-5 w-auto" />

			<div class="space-y-1 flex flex-col">
				<h1 class="text-2xl font-bold tracking-wide">Sign In or Join Now!</h1>
				<p class="text-base text-muted-foreground">login or create your efferd account.</p>
			</div>

			<div class="space-y-2">
				<Button class="w-full" type="button">
					<GoogleLogo data-icon="inline-start" />
					Continue with Google
				</Button>

				<Button class="w-full" type="button">
					<GithubLogo data-icon="inline-start" />
					Continue with GitHub
				</Button>
			</div>

			<p class="mt-8 text-sm text-muted-foreground">
				By clicking continue, you agree to our
				<a class="underline underline-offset-4 hover:text-primary" href={termsHref}
					>Terms of Service</a
				>
				and
				<a class="underline underline-offset-4 hover:text-primary" href={privacyHref}
					>Privacy Policy</a
				>.
			</p>
		</div>
	</div>
</div>
