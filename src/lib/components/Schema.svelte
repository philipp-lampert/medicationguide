<script lang="ts">
	let { json } = $props();

	const scriptTag = $derived(
		`<script type="application/ld+json">${JSON.stringify(json)}${'<'}/script>`
	);
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html scriptTag}
