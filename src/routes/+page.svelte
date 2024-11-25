<script>
	import Indications from '$lib/tables/Indications.svelte';
	import Contraindications from '$lib/tables/Contraindications.svelte';
	import SeeDoctor from '$lib/tables/SeeDoctor.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Medication Guide</title>
</svelte:head>

<section class="my-32">
	<div class="container flex flex-col items-center space-y-12">
		<h1>Which <span class="italic">pain reliever</span> should I use?</h1>
		<p class="max-w-2xl">
			While many analgesics can be purchased without a prescription, not all are effective for every
			symptom. Side effects also vary and can put individuals with certain health conditions at
			risk.
		</p>
		<p class="max-w-2xl font-medium">
			Use the interactive guide to find the appropriate medication for you and your symptoms.
		</p>
		<a
			href="/interactive"
			class="button group flex items-center gap-2 border-3 bg-white px-9 py-2.5 font-medium transition-all duration-500 hover:gap-3"
		>
			Start Guide
			<img
				class="h-4 transition-all duration-500"
				src="/angle-double-right.svg"
				alt="Start Guide"
			/>
		</a>
	</div>
</section>
<section class="my-32">
	<div class="container flex flex-col items-center space-y-16">
		<div class="flex flex-col space-y-6">
			<h2>Differences between <span class="italic">over-the-counter </span> analgesics</h2>
			<p class="max-w-4xl">
				Pain relievers vary in their mechanisms of action and side effects. Thus, not every
				medication is effective against every symptom or safe for everyone. Selecting the right
				analgesic requires careful consideration of both the desired therapeutic effects and
				potential risks. The tables below summarize the key differences. For a personalized
				recommendation, use our <a class="underline" href="/interactive">interactive guide</a>.
			</p>
		</div>
		<div class="flex flex-col items-center space-y-6">
			<h3>Effectiveness of pain relievers for specific symptoms</h3>
			<Indications />
		</div>
		<div class="flex flex-col items-center space-y-6">
			<h3>Contraindications and side-effects</h3>
			<Contraindications />
		</div>
	</div>
</section>
<section class="my-32">
	<div class="container flex flex-col items-center space-y-10">
		<h2>When should I see a <span class="italic">doctor</span>?</h2>
		<p class="max-w-4xl">
			While many types of pain can be managed with over-the-counter medications, certain situations
			require medical attention to identify or address underlying causes. You should see a doctor if
			you experience any of the following:
		</p>
		<SeeDoctor />
	</div>
</section>
