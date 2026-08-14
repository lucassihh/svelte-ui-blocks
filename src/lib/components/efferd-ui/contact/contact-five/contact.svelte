<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { Mail, Phone, type Icon as IconType } from "@lucide/svelte";
	import ContactForm from "./contact-form.svelte";
	import { cn } from "$lib/utils";

	type ContactItem = {
		title: string;
		value: string;
		icon: typeof IconType;
	};

	const data: ContactItem[] = [
		{
			title: "Call Us Today!",
			value: "+1 (555) 123-4567",
			icon: Phone
		},
		{
			title: "Send an Email",
			value: "mail@example.com",
			icon: Mail
		}
	];
</script>

<div class="max-w-lg relative mx-auto w-full border">
	<div class="px-6 py-8 border-b">
		<div class="mb-8 gap-2 flex flex-col">
			<h1 class="text-xl font-semibold md:text-2xl">Get in touch</h1>
			{" "}
			<p class="text-sm text-muted-foreground">
				Have a question, feedback, or want to collaborate? <br /> We'd love to hear from you.
			</p>
		</div>

		<div class="gap-2 md:grid-cols-2 grid">
			{#each data as item}
				{@const Icon = item.icon}
				<div class="gap-4 p-2 flex items-center">
					<div class="[&_svg]:size-5 [&_svg]:text-muted-foreground">
						<Icon />
					</div>
					<div class={cn("gap-y-0.5 flex flex-col")}>
						<h2 class="text-sm">{item.title}</h2>
						<p class="text-xs text-muted-foreground">{item.value}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="px-6 py-8">
		<div class="mb-8 gap-1.5 flex flex-col">
			<h2 class="text-xl font-medium">Send a message</h2>
			{" "}
			<p class="text-sm text-muted-foreground">
				Fill out the form below and our team will get back to you shortly.
			</p>
		</div>
		<ContactForm />
	</div>
	<DecorIcon position="top-left" />
	<DecorIcon position="top-right" />
	<DecorIcon position="bottom-left" />
	<DecorIcon position="bottom-right" />
</div>
