<script>
	import Schema from '$lib/components/Schema.svelte';
	import MedicalWebPage from './MedicalWebPage.json';
	import MedicalOrganization from './MedicalOrganization.json';
</script>

<title>Personalized OTC Pain Relief Guidance | Medication Guide™</title>
<meta
	name="description"
	content="Free and personalized OTC pain medication recommendations based on your symptoms and risk factors. Our evidence-based benefit-risk assessment helps you choose safely between paracetamol, ibuprofen, naproxen, and aspirin."
/>
<meta property="og:title" content="Personalized Pain Relief Guidance" />
<meta property="og:type" content="website" />
<meta
	property="og:description"
	content="Use our interactive quiz to find the best pain reliever."
/>
<meta property="og:image" content="https://medicationguide.org/logo-social.jpg" />
<meta property="og:url" content="https://medicationguide.org" />
<Schema json={MedicalWebPage} />
<Schema json={MedicalOrganization} />
