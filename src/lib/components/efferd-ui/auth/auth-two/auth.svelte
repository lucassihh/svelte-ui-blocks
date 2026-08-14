<script lang="ts">
	import { AtSignIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { AuthDivider } from "$lib/components/ui/auth-divider";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";

	// SVG
	import GithubLogo from "$lib/assets/svg/social/github.svelte";
	import GoogleLogo from "$lib/assets/svg/brand/google.svelte";

	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthTwoProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		termsHref?: string;
		privacyHref?: string;
		emailPlaceholder?: string;
	};

	let {
		class: className = "",
		termsHref = "/",
		privacyHref = "/",
		emailPlaceholder = "your.email@example.com",
		...restProps
	}: AuthTwoProps = $props();
</script>

<div
	class={cn(
		"px-6 md:px-8 relative flex h-screen w-full items-center justify-center overflow-hidden",
		className
	)}
	{...restProps}
>
	<div
		class={cn(
			"max-w-sm p-6 md:p-8 relative flex w-full flex-col justify-between",
			"dark:bg-[radial-gradient(50%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="-inset-y-6 absolute -left-px w-px bg-border"></div>
		<div class="-inset-y-6 absolute -right-px w-px bg-border"></div>
		<div class="-inset-x-6 absolute -top-px h-px bg-border"></div>
		<div class="-inset-x-6 absolute -bottom-px h-px bg-border"></div>

		<DecorIcon position="top-left" />
		<DecorIcon position="bottom-right" />

		<div class="max-w-sm animate-in space-y-8 w-full">
			<div class="space-y-1 flex flex-col">
				<h1 class="text-2xl font-bold tracking-wide">Join Now!</h1>
				<p class="text-base text-muted-foreground">Login or create your efferd account.</p>
			</div>

			<div class="space-y-4">
				<form class="space-y-2">
					<InputGroup>
						<InputGroupInput placeholder={emailPlaceholder} type="email" />
						<InputGroupAddon align="inline-start">
							<AtSignIcon />
						</InputGroupAddon>
					</InputGroup>

					<Button class="w-full" size="sm" type="button">Continue With Email</Button>
				</form>

				<AuthDivider>OR</AuthDivider>

				<div class="gap-2 grid grid-cols-2">
					<Button class="w-full" type="button" variant="outline">
						<GoogleLogo data-icon="inline-start" />
						Google
					</Button>

					<Button class="w-full" type="button" variant="outline">
						<GithubLogo data-icon="inline-start" />
						GitHub
					</Button>
				</div>
			</div>

			<p class="text-sm text-muted-foreground">
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
