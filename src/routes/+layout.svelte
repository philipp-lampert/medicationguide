<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';

	let isQuestionPage = $derived($page.url.pathname.startsWith('/interactive'));
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="relative flex-grow {isQuestionPage ? 'flex items-center justify-center' : ''}">
		{@render children()}
	</main>
	<Footer />
</div>
