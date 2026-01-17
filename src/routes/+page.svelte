<script>
	import AnimatedUnderline from '$lib/components/AnimatedUnderline.svelte';
	import ArrowDoubleRight from '$lib/icons/buttons/ArrowDoubleRight.svelte';
	import HeadContent from './HeadContent.svelte';
	import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';
	import { fly } from 'svelte/transition';

	const facts = [
		{
			label: '4.9% of patients taking an OTC analgesic are at risk of major drug-drug interactions',
			url: 'https://link.springer.com/article/10.1007/s00482-014-1415-5'
		},
		{
			label: '44% of patients exceed the maximum recommended dosage of OTC analgesics',
			url: 'https://www.jrheum.org/content/32/11/2218.long'
		},
		{
			label: 'Over half of patients lack sufficient knowledge about the risks of OTC analgesics',
			url: 'https://doi.org/10.1016/j.japh.2022.03.007'
		},
		{
			label: `${paracetamolAcetaminophen(true)} overdose accounts for ~$87 million in annual US healthcare costs`,
			url: 'https://doi.org/10.1093/qjmed/95.9.609'
		}
	];

	let currentFactIndex = $state(0);
	let isAnimating = $state(false);

	// Auto-rotate facts
	$effect(() => {
		const interval = setInterval(() => {
			isAnimating = true;

			setTimeout(() => {
				currentFactIndex = (currentFactIndex + 1) % facts.length;
				isAnimating = false;
			}, 800);
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<HeadContent />
</svelte:head>

<section class="section">
	<div class="container flex flex-col items-center gap-10 md:gap-12">
		<h1 class="h1 sm:max-w-md md:max-w-lg lg:max-w-xl">
			Find the best pain reliever for your symptoms
		</h1>
		<div class="flex flex-col gap-y-4">
			<p class="max-w-2xl">
				While many analgesics can be purchased without a prescription, not all are effective for
				every symptom. Side effects also vary and can put individuals with certain health conditions
				at risk.
			</p>
			<p class="font-medium">
				Use the interactive quiz to find the appropriate medication for you and your symptoms.
			</p>
		</div>
		<div
			class="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border-2 border-gray-200 bg-gray-100 py-4 pr-4 pl-6 text-center sm:text-left"
		>
			<p class="text-sm font-normal text-gray-700">
				Get a personalized recommendation<br />by taking the anonymous quiz.
			</p>
			<a
				href="/quiz"
				data-sa-link-event="start_quiz_main"
				class="group shadow-3xl relative inline-flex items-center overflow-hidden rounded-xl
										   bg-linear-to-tr from-black to-gray-700 px-12 py-3 text-center font-normal text-white transition-all
											duration-500"
			>
				<span
					class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2"
				>
					<ArrowDoubleRight classes="h-4 fill-white" />
				</span>
				<span class="relative w-full transform duration-500 group-hover:-translate-x-2"
					>Start Quiz</span
				>
			</a>
		</div>
	</div>
</section>
<section class="section">
	<div class="container flex flex-col items-center">
		<div class="flex w-full flex-col py-8 lg:flex-row lg:flex-nowrap">
			<article class="flex flex-col gap-1 bg-white text-left lg:w-1/3">
				<h2 class="h3">1. Answer 9 Questions</h2>
				<p>
					Answer clinical questions about your symptoms and risk factors. This helps identify which
					medications are most effective for your specific symptoms as well as potential
					contraindications and safety considerations for different pain relievers.
				</p>
			</article>
			<div
				class="my-6 h-0.5 w-full shrink-0 bg-black lg:mx-12 lg:my-0 lg:h-28 lg:w-0.5 lg:self-center"
			></div>
			<article class="flex flex-col gap-1 bg-white text-left lg:w-1/3">
				<h2 class="h3">2. Algorithmic Analysis</h2>
				<p>
					Our evidence-based algorithm processes your responses, weighing both effectiveness and
					safety considerations based on your symptoms and risk profile to generate personalized
					recommendations.
				</p>
			</article>
			<div
				class="my-6 h-0.5 w-full shrink-0 bg-black lg:mx-12 lg:my-0 lg:h-28 lg:w-0.5 lg:self-center"
			></div>
			<article class="flex flex-col gap-1 bg-white text-left lg:w-1/3">
				<h2 class="h3">3. Personalized Results</h2>
				<p>
					Receive a detailed analysis of which OTC pain medications are most appropriate for you,
					including percentage matches, specific reasons for recommendations, and scientific
					explanations for each determination.
				</p>
			</article>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<div
			class="relative flex h-44 items-center justify-center overflow-hidden sm:h-32 sm:text-center md:h-24"
		>
			<div
				class="absolute top-0 right-0 left-0 z-10 h-4 bg-linear-to-b from-white to-transparent"
			></div>
			{#if !isAnimating}
				<h2
					class="h2 absolute"
					in:fly={{ y: 50, duration: 700 }}
					out:fly={{ y: -50, duration: 700 }}
				>
					<a href={facts[currentFactIndex].url} target="_blank" class="text-link group">
						{facts[currentFactIndex].label}<AnimatedUnderline bottom={4} height={3} /></a
					>
				</h2>
			{/if}
			<div
				class="absolute right-0 bottom-0 left-0 z-10 h-4 bg-linear-to-t from-white to-transparent"
			></div>
		</div>
	</div>
</section>
<section class="section">
	<div class="container flex flex-col items-center">
		<div
			class="grid w-full grid-cols-1 gap-10 border-y-2 border-black py-8 md:grid-cols-2 lg:grid-cols-4"
		>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Personalized</h3>
				<p>
					Our interactive quiz is designed to provide personalized recommendations on the most
					suitable OTC analgesics based on your specific symptoms and risk factors. You'll receive
					detailed explanations, including why certain medications may be more appropriate or
					potentially contraindicated.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Evidence-based</h3>
				<p>
					All medical information on this website is based on peer-reviewed scientific publications,
					accessible through citations, and has been reviewed by medical professionals. However,
					please note that we do not provide medical advice as per our <a
						class="text-link group"
						href="/legal/disclaimer"
					>
						disclaimer<AnimatedUnderline /></a
					>.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Anonymous</h3>
				<p>
					Your data remains completely private. All information is processed locally on your device
					and exists only in your browser's temporary memory. Nothing is ever transmitted to
					external servers, stored in databases, or accessible to anyone else.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Open Source</h3>
				<p>
					The Medication Guide project and its code are fully open-source under an AGPL license. We
					invite you to explore our <a
						href="https://github.com/philipp-lampert/medicationguide"
						class="text-link group"
						target="_blank"
						>repository
						<AnimatedUnderline /></a
					> to understand how the recommendation algorithm works, suggest improvements, or contribute
					directly to the project.
				</p>
			</article>
		</div>
	</div>
</section>
<section class="section">
	<article class="container flex flex-col items-center">
		<div class="flex flex-col gap-6">
			<h2 class="h2">Who is behind the project?</h2>
			<p class="max-w-3xl">
				The project was created by <a
					class="text-link group"
					href="https://www.researchgate.net/profile/Philipp-Lampert"
					target="_blank"
					>Philipp Lampert <AnimatedUnderline />
				</a>
				in collaboration with the Institute of Clinical Pharmacology and Toxicology at the Charité University
				Hospital in Berlin, Germany. Senior doctors from Belgium's Institut Jules Bordet and Mexico's
				Hospital General de Querétaro reviewed and contributed to the project. Feel free to reach out
				by sending an email to
				<a class="text-link group" href="mailto:info@medicationguide.org"
					>info@medicationguide.org<AnimatedUnderline /></a
				>.
			</p>
		</div>
	</article>
</section>
