<script>
	import AnimatedUnderline from '$lib/components/AnimatedUnderline.svelte';
	import MedicalOrganization from './MedicalOrganization.json';
	import Schema from '$lib/components/Schema.svelte';
</script>

<svelte:head>
	<title>About Medication Guide™ | Personalized Recommendations</title>
	<meta
		name="description"
		content="Medication Guide is designed to support you in making informed decisions about over-the-counter pain medication. As a free and open-source project, we aim to make reliable health information accessible for everyone."
	/>
	<meta property="og:title" content="About Medication Guide™" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="An interactive guide for selecting the most appropriate pain reliever based on your symptoms and risk profile."
	/>
	<meta property="og:image" content="https://medicationguide.org/logo-social.jpg" />
	<meta property="og:url" content="https://medicationguide.org/about" />
	<Schema json={MedicalOrganization} />
</svelte:head>

<section class="section">
	<article class="container flex flex-col gap-6 sm:items-center">
		<div class="flex flex-col gap-1">
			<h1 class="h1">Medication Guide</h1>
			<h2 class="italic sm:text-lg md:text-xl">Interactive Tools for Better Health Decisions</h2>
		</div>
		<p class="max-w-3xl">
			Medication Guide is designed to support well-informed decisions on over-the-counter pain
			medication. With our interactive guide we aim to provide guidance for selecting the most
			appropriate treatment for you and your symptoms. While the information on this website has
			been reviewed by medical professionals, it is not a substitute for professional medical
			advice.
		</p>
	</article>
</section>
<section class="section">
	<div class="container flex flex-col items-center">
		<div
			class="grid w-full grid-cols-1 gap-x-10 gap-y-10 border-y-2 border-black py-8 md:grid-cols-2 lg:grid-cols-4"
		>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Interactive Guide</h3>
				<p>
					Designed to give personalized recommendations for the most suitable pain relievers, our
					interactive guide covers the most important indications and contraindications.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Verified information</h3>
				<p>
					All medical information on this website is reviewed by experienced medical professionals.
					However, please note that we do not provide medical advice as per our <a
						class="text-link group"
						href="/legal/disclaimer"
					>
						disclaimer<AnimatedUnderline /></a
					>.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Accessible</h3>
				<p>
					Our aim is to make reliable health information accessible and understandable for everyone,
					especially people in regions where access to healthcare professionals is limited.
				</p>
			</article>
			<article class=" flex flex-col gap-1 bg-white text-left">
				<h3 class="h3">Open Source</h3>
				<p>
					The Medication Guide project and its code are fully open-source. If you would like to know
					how our interactive guide works or contribute to the project, have a look at our <a
						href="https://github.com/philipp-lampert/medication-guide"
						class="text-link group"
						target="_blank"
						>repository
						<AnimatedUnderline /></a
					>.
				</p>
			</article>
		</div>
	</div>
</section>
<section class="section">
	<article class="container flex flex-col items-center">
		<div class="flex flex-col gap-6">
			<h2 class="h2">Who is behind the project?</h2>
			<p class="max-w-2xl">
				This project was created by <a
					class="text-link group"
					href="https://www.researchgate.net/profile/Philipp-Lampert"
					target="_blank"
					>Philipp Lampert <AnimatedUnderline />
				</a>
				in collaboration with senior doctors from Berlin's Charité university hospital and the
				Hospital General de Querétaro in Mexico. Feel free to reach out by sending an email to
				<a class="text-link group" href="mailto:info@medicationguide.org"
					>info@medicationguide.org<AnimatedUnderline /></a
				>.
			</p>
		</div>
	</article>
</section>
