<script lang="ts">
	import { Card } from "$lib/components/ui/veil-ui/card";
	import Shield from "@lucide/svelte/icons/shield";
	import {
		ClerkIcon,
		FirebaseIcon,
		LinearIcon,
		SlackIcon,
		SupabaseIcon,
		VercelIcon
	} from "$lib/assets/svg/index.ts";
</script>

<section data-theme="veil" class="@container bg-background px-4 py-24">
	<main class="mx-auto flex w-full max-w-4xl flex-col justify-center gap-8">
		<!-- Text -->
		<div class="text-center">
			<h2 class="font-serif text-4xl font-medium text-balance">
				Powerful Features for Modern Teams
			</h2>
			<p class="mt-4 text-balance text-muted-foreground">
				Everything you need to build, connect, and scale your integrations effortlessly.
			</p>
		</div>

		<!-- Grid -->
		<div class="flex flex-col items-center gap-4 md:grid md:grid-cols-3">
			<!-- Feature One -->
			<Card variant="outline" class="flex flex-col justify-center overflow-hidden p-4">
				<!-- Title and Description -->
				<div class="space-y-2">
					<h3 class="font-medium text-foreground">Real-time Sync</h3>
					<p class="text-sm text-muted-foreground">
						Keep your data synchronized across all platforms automatically.
					</p>
				</div>
				<!-- Ilustration -->
				<div aria-hidden={true} class="relative h-[10rem] translate-y-6">
					<div class="absolute inset-0 mx-auto w-px bg-foreground/15"></div>
					<div
						class="absolute -inset-x-16 top-6 aspect-square rounded-full border border-border"
					></div>
					<div
						class="absolute -inset-x-16 top-6 aspect-square rounded-full border border-border border-primary mask-r-from-50% mask-r-to-50% mask-l-from-50% mask-l-to-90%"
					></div>
					<div
						class="absolute -inset-x-8 top-24 aspect-square rounded-full border border-border"
					></div>
					<div
						class="absolute -inset-x-8 top-24 aspect-square rounded-full border border-border border-lime-500 mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50%"
					></div>
				</div>
			</Card>

			<!-- Feature Two -->
			<Card variant="outline" class="flex flex-col justify-center overflow-hidden p-4">
				<!-- Title and Description -->
				<div class="space-y-2">
					<h3 class="font-medium text-foreground">Developer First</h3>
					<p class="mt-2 text-sm text-muted-foreground">
						Built with developers in mind, featuring comprehensive APIs and SDKs.
					</p>
				</div>
				<!-- Illustration -->
				<div
					aria-hidden={true}
					class="flex h-[10rem] justify-between pt-12 pb-6 *:h-full *:w-px *:bg-foreground/15"
				>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
				</div>
			</Card>

			<!-- Feature Three -->
			<Card variant="outline" class="flex flex-col justify-center overflow-hidden p-4">
				<!-- Title and Description -->
				<div class="space-y-2">
					<h3 class="font-medium">Enterprise Ready</h3>
					<p class="text-sm text-muted-foreground">
						Scale confidently with enterprise-grade security and reliability.
					</p>
				</div>
				<!-- Illustration -->
				<div class="pointer-events-none relative flex h-[10rem] items-center justify-center pt-5">
					<Shield class="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
					<Shield class="size-32 stroke-[0.1px]" />
				</div>
			</Card>
		</div>
	</main>
</section>
