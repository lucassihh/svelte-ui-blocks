<script lang="ts">
	import { asset } from "$app/paths";

	// Seo
	import Seo from "$lib/components/base/Seo.svelte";

	// Hero
	import LandingHero from "$lib/components/landing/landing-hero.svelte";
</script>

<!-- Seo -->
<Seo title="Home page" desc="Home page" link="/" />

<!-- Landing Hero -->
<div class="overflow-hidden">
	<LandingHero />
</div>
