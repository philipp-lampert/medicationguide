<script>
	let json = $props();
</script>

{@html `<script type="application/ld+json">${JSON.stringify(json)}</script>`}
