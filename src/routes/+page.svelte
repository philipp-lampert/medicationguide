<script>
	import IndicationsTable from '$lib/IndicationsTable.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Medication Guide</title>
</svelte:head>

<section class="my-32">
	<div class="container flex flex-col space-y-12">
		<h1>Which <span class="italic">pain reliever</span> should I use?</h1>
		<p>
			While many analgesics are readily accessible, not all are effective for every symptom, <br /> with
			some carrying risks for individuals with certain health conditions.
		</p>
		<p class="font-medium">
			Use the interactive guide to find the ideal medication for you and your symptoms.
		</p>
		<button class="mx-auto gap-2 rounded-xl border-3 px-9 py-2 font-medium"
			>Start Guide <img src="/angle-double-right.svg" alt="Start Guide" class="h-3" />
		</button>
	</div>
</section>
<section>
	<div class="container flex flex-col items-center space-y-10">
		<div>
			<h2>Differences between <span class="italic">over-the-counter </span> analgesics</h2>
		</div>
		<IndicationsTable />
	</div>
</section>
