<script lang="ts">
	// UI
	import { Button } from "$lib/components/ui/button";

	// Data
	import { socialLinks } from "./social-links";
</script>

<!-- SocialLinks With Icons -->
<div class="gap-1 flex items-center">
	{#each socialLinks as item, index (`social-${item.link}-${index}`)}
		{@const SocialIcon = item.icon}
		<Button
			href={item.link}
			aria-label={item.label}
			rel="noreferrer"
			size="icon-sm"
			target="_blank"
			variant="outline"
		>
			<SocialIcon class="size-4" />
		</Button>
	{/each}
</div>
