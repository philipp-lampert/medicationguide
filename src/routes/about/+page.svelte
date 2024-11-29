<script>
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
</script>

<svelte:head>
	<title>About Medication Guide</title>
</svelte:head>

<section class="my-32">
	<article class="container flex flex-col items-center">
		<h1 class="h1 mb-3">Medication Guide</h1>
		<h2 class="mb-12 text-2xl italic">Interactive Tools for Better Health Decisions</h2>
		<p class="max-w-3xl">
			Medication Guide is designed to support you in making well-informed decisions about
			over-the-counter pain medication. Through our interactive guide, educational resources, and
			expert-backed advice, we aim to provide guidance for selecting the most appropriate treatment
			for you and your symptoms. While the information on this website has been reviewed by medical
			professionals, it is not a substitute for professional medical advice.
		</p>
	</article>
</section>
<section class="my-32">
	<div class="container flex flex-col items-center">
		<div class="grid w-full grid-cols-4 gap-x-10 border-y-2 border-black py-8">
			<article class=" flex flex-col gap-2 bg-white text-left">
				<h3 class="h3">Interactive Guide</h3>
				<p>
					Designed to give personalized recommendations for the most suitable pain relievers, our
					interactive guide covers the most important indications and contraindications.
				</p>
			</article>
			<article class=" flex flex-col gap-2 bg-white text-left">
				<h3 class="h3">Educational Content</h3>
				<p>
					Still under development, our knowledge base will offer comparisons of pain relievers,
					explanations of side effects, and advice for managing common symptoms.
				</p>
			</article>
			<article class=" flex flex-col gap-2 bg-white text-left">
				<h3 class="h3">Accessible</h3>
				<p>
					Our aim is to make reliable health information accessible and understandable for everyone,
					especially people in regions where access to healthcare professionals is limited.
				</p>
			</article>
			<article class=" flex flex-col gap-2 bg-white text-left">
				<h3 class="h3">Open Source</h3>
				<p>
					The Medication Guide project and its code are fully open-source. If you would like to know
					how our interactive guide works or contribute to the project, have a look at our <a
						href="https://github.com/philipp-lampert/medication-guide"
						class="text-link group"
						>repository
						<SlidingBottomBorder /></a
					>.
				</p>
			</article>
		</div>
	</div>
</section>
<section class="my-32">
	<article class="container max-w-3xl">
		<div>
			<h2 class="h2 mb-4">Who is <span class="italic">behind</span> the project?</h2>
			<p>
				This project was created by Philipp Lampert, final-year medical student from Germany, in
				collaboration with senior doctors from Berlin's Charité university hospital. For more
				information about myself, you can visit my
				<a class="text-link group" href="https://www.researchgate.net/profile/Philipp-Lampert"
					>ResearchGate <SlidingBottomBorder />
				</a>
				and
				<a class="text-link group" href="www.linkedin.com/in/philipp-lampert-84aabb1b3"
					>LinkedIn<SlidingBottomBorder />
				</a> profiles.
			</p>
		</div>
	</article>
</section>
