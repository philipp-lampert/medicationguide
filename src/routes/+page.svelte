<script>
	import Indications from '$lib/tables/Indications.svelte';
	import Contraindications from '$lib/tables/Contraindications.svelte';
	import SeeDoctor from '$lib/tables/SeeDoctor.svelte';
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import ArrowDoubleRight from '$lib/assets/icons/buttons/ArrowDoubleRight.svelte';
</script>

<svelte:head>
	<title>Medication Guide: Pain Relievers</title>
</svelte:head>

<section class="section">
	<div class="container flex flex-col items-center gap-8 md:gap-12">
		<h1 class="h1">Which <span class="italic">pain reliever</span> should I use?</h1>
		<p class="max-w-2xl text-left">
			While many analgesics can be purchased without a prescription, not all are effective for every
			symptom. Side effects also vary and can put individuals with certain health conditions at
			risk.
		</p>
		<p class="max-w-2xl font-medium">
			Use the interactive guide to find the appropriate medication for you and your symptoms.
		</p>
		<a
			href="/interactive"
			class="group relative inline-flex items-center overflow-hidden rounded-2xl
										  bg-black px-12 py-3 font-normal text-white drop-shadow-xl
											transition-all duration-500 hover:drop-shadow-2xl"
		>
			<span
				class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2"
			>
				<ArrowDoubleRight classes={'h-4 fill-white'} />
			</span>
			<span class="relative transform duration-500 group-hover:-translate-x-3">Start Guide</span>
		</a>
	</div>
</section>
<section class="section">
	<article class="container flex flex-col items-center gap-16 md:gap-20">
		<div class="flex flex-col items-center gap-y-6">
			<h2 class="h2">
				Differences between <span class="italic">over-the-counter </span> analgesics
			</h2>
			<p class="max-w-4xl">
				Pain relievers vary in their mechanisms of action and side effects. Thus, not every
				medication is effective against every symptom or safe for everyone. Selecting the right
				analgesic requires careful consideration of both the desired therapeutic effects and
				potential risks. The tables below summarize the key differences. For a personalized
				recommendation, use our <a class="text-link group" href="/interactive"
					>interactive guide<SlidingBottomBorder /></a
				>.
			</p>
		</div>
		<div class="w-full lg:w-fit">
			<h3 class="h3 mb-4 lg:mb-6">Effectiveness for specific symptoms</h3>
			<div class="w-full overflow-auto rounded-xl lg:w-fit">
				<Indications />
			</div>
		</div>
		<div class="w-full lg:w-fit">
			<h3 class="h3 mb-4 lg:mb-6">Contraindications and side effects</h3>
			<div class="w-full overflow-auto rounded-xl lg:w-fit">
				<Contraindications />
			</div>
		</div>
	</article>
</section>
<section class="section">
	<article class="container flex flex-col items-center gap-y-10">
		<h2 class="h2">When should I see a <span class="italic">doctor</span>?</h2>
		<p class="max-w-4xl">
			While many types of pain can be managed with over-the-counter medications, certain situations
			require medical attention to identify or address underlying causes. You should see a doctor if
			you experience any of the following:
		</p>
		<div class="w-full overflow-auto rounded-xl lg:w-fit">
			<SeeDoctor />
		</div>
	</article>
</section>
