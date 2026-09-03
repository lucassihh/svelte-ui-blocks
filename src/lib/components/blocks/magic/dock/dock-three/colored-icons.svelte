<script lang="ts">
	import XIcon from "$lib/assets/svg/social/x.svelte";
	import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
	import YoutubeIcon from "$lib/assets/svg/social/youtube.svelte";
	import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
	import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";

	import { Dock, DockIcon } from "$lib/components/ui/magic-ui/dock";
</script>

<div class="relative flex w-full items-center justify-center">
	<Dock iconMagnification={70} iconDistance={120}>
		<DockIcon class="bg-[#1DA1F2]/20 text-[#1DA1F2]">
			<XIcon class="size-full" />
		</DockIcon>
		<DockIcon
			class="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#E1306C]"
		>
			<InstagramIcon class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#FF0000]/20 text-[#FF0000]">
			<YoutubeIcon class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#0077B5]/20 text-[#0077B5]">
			<LinkedinIcon class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#1877F2]/20 text-[#1877F2]">
			<FacebookIcon class="size-full" />
		</DockIcon>
	</Dock>
</div>
