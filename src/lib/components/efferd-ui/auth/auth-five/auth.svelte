<script lang="ts">
	import { AtSignIcon, ChevronLeftIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { AuthDivider } from "$lib/components/ui/auth-divider";
	import { FloatingPaths } from "$lib/components/ui/floating-paths";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";

	// SVG
	import AppleLogo from "$lib/assets/svg/brand/apple.svelte";
	import GithubLogo from "$lib/assets/svg/social/github.svelte";
	import GoogleLogo from "$lib/assets/svg/brand/google.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";

	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthFiveProps = HTMLAttributes<HTMLElement> & {
		class?: string;
		homeHref?: string;
		logoHref?: string;
		termsHref?: string;
		privacyHref?: string;
		emailPlaceholder?: string;
		quoteText?: string;
		quoteAuthor?: string;
	};

	let {
		class: className = "",
		homeHref = "/",
		logoHref = "/",
		termsHref = "/",
		privacyHref = "/",
		emailPlaceholder = "your.email@example.com",
		quoteText = '"This Platform has helped me to save time and serve my clients faster than ever before."',
		quoteAuthor = "~ Ali Hassan",
		...restProps
	}: AuthFiveProps = $props();
</script>

<main
	class={cn("md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2 relative", className)}
	{...restProps}
>
	<div
		class="p-10 lg:flex relative hidden h-full flex-col border-r bg-secondary dark:bg-secondary/20"
	>
		<div
			class="inset-0 absolute bg-linear-to-b from-transparent via-transparent to-background"
		></div>

		<a aria-label="Home" class="relative z-10 mr-auto" href={logoHref}>
			<Logo class="h-4.5 w-auto" />
		</a>

		<div class="z-10 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-xl">{quoteText}</p>
				<footer class="text-sm font-semibold font-mono">{quoteAuthor}</footer>
			</blockquote>
		</div>

		<div class="inset-0 absolute">
			<FloatingPaths position={1} />
			<FloatingPaths position={-1} />
		</div>
	</div>

	<div class="px-8 relative flex min-h-screen flex-col justify-center">
		<div aria-hidden="true" class="inset-0 absolute isolate -z-10 opacity-60 contain-strict">
			<div
				class="top-0 right-0 h-320 w-140 -translate-y-87.5 absolute rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]"
			></div>
			<div
				class="top-0 right-0 h-320 w-60 absolute [translate:5%_-50%] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
			></div>
			<div
				class="top-0 right-0 h-320 w-60 -translate-y-87.5 absolute rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
			></div>
		</div>

		<Button class="top-7 left-5 absolute" href={homeHref} variant="ghost">
			<ChevronLeftIcon data-icon="inline-start" />
			Home
		</Button>

		<div class="max-w-sm space-y-4 mx-auto w-full">
			<a aria-label="Home" class="lg:hidden w-fit" href={logoHref}>
				<Logo class="h-4.5 w-auto" />
			</a>

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
					<AppleLogo data-icon="inline-start" />
					Continue with Apple
				</Button>

				<Button class="w-full" type="button">
					<GithubLogo data-icon="inline-start" />
					Continue with GitHub
				</Button>
			</div>

			<AuthDivider>OR</AuthDivider>

			<form class="space-y-2">
				<p class="text-xs text-start text-muted-foreground">
					Enter your email address to sign in or create an account
				</p>

				<InputGroup>
					<InputGroupInput placeholder={emailPlaceholder} type="email" />
					<InputGroupAddon align="inline-start">
						<AtSignIcon />
					</InputGroupAddon>
				</InputGroup>

				<Button class="w-full" type="button">Continue With Email</Button>
			</form>

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
</main>
