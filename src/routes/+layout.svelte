<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { page } from '$app/stores';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// PostHog analytics
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let isQuestionPage = $derived($page.url.pathname.startsWith('/interactive'));
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="relative flex-grow {isQuestionPage ? '' : ''}">
		{@render children()}
	</main>
	<Footer />
</div>
