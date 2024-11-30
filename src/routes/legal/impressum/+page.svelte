<script>
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
</script>

<section class="section">
	<div class="container">
		<h1 class="mb-8 text-4xl font-medium">Impressum</h1>
		<div class="mx-auto flex max-w-xs flex-col gap-8 text-left">
			<div>
				<h2 class="h2-legal">Redaktionell verantwortlich</h2>
				<p>
					Philipp Lampert<br />
					Pappelallee 45<br />
					10437 Berlin<br />
					Deutschland
				</p>
				<p>
					E-Mail: <a class="text-link group" href="mailto:philipp.lampert@charite.de"
						>philipp.lampert@charite.de
						<SlidingBottomBorder />
					</a>
				</p>
			</div>
			<div>
				<h2 class="h2-legal">Umsatzsteuer-ID</h2>
				<p>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
					DE368254012
				</p>
			</div>
			<div>
				<h2 class="h2-legal">EU-Streitschlichtung</h2>
				<p>
					Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a
						href="https://ec.europa.eu/consumers/odr/"
						target="_blank"
						rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a
					>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
			</div>
			<div>
				<h2 class="h2-legal">Verbraucherstreitbeilegung</h2>
				<p>
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
		</div>
	</div>
</section>
