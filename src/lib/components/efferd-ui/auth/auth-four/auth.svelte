<script lang="ts">
	import { AtSignIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { AuthDivider } from "$lib/components/ui/auth-divider";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";

	// SVG
	import GoogleLogo from "$lib/assets/svg/brand/google.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";

	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthFourProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		logoHref?: string;
		privacyHref?: string;
		termsHref?: string;
		emailPlaceholder?: string;
		emailAriaLabel?: string;
	};

	let {
		class: className = "",
		logoHref = "/",
		privacyHref = "/",
		termsHref = "/",
		emailPlaceholder = "your.email@example.com",
		emailAriaLabel = "Email address",
		...restProps
	}: AuthFourProps = $props();
</script>

<div class={cn("px-4 md:h-screen relative w-full overflow-hidden", className)} {...restProps}>
	<div
		class="max-w-sm *:px-6 relative mx-auto flex min-h-screen w-full flex-col justify-center border-x"
	>
		<div class="space-y-6 flex flex-col">
			<a aria-label="Home" href={logoHref}>
				<Logo class="h-4.5 w-auto" />
			</a>

			<div class="space-y-1">
				<h1 class="text-xl font-semibold tracking-wide">Hey, welcome!</h1>
				<p class="text-base text-muted-foreground">Log in or sign up. It only takes a moment.</p>
			</div>
		</div>

		<div class="my-6 gap-4 py-8 relative flex size-full flex-col">
			<FullWidthDivider position="top" />

			<Button class="w-full" type="button" variant="outline">
				<GoogleLogo aria-hidden="true" data-icon="inline-start" />
				Continue with Google
			</Button>

			<AuthDivider>OR CONTINUE WITH EMAIL</AuthDivider>

			<form class="space-y-2">
				<InputGroup>
					<InputGroupInput
						aria-label={emailAriaLabel}
						placeholder={emailPlaceholder}
						type="email"
					/>
					<InputGroupAddon align="inline-start">
						<AtSignIcon />
					</InputGroupAddon>
				</InputGroup>

				<Button class="w-full" size="sm" type="submit">Continue With Email</Button>
			</form>

			<FullWidthDivider position="bottom" />
		</div>

		<p class="text-sm text-center text-muted-foreground">
			This site is protected by reCAPTCHA and the Google
			<a class="underline underline-offset-4 hover:text-primary" href={privacyHref}
				>Privacy Policy</a
			>
			and
			<a class="underline underline-offset-4 hover:text-primary" href={termsHref}
				>Terms of Service</a
			>
			apply.
		</p>
	</div>
</div>
