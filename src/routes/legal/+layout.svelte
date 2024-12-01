<script>
	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

{@render children()}
