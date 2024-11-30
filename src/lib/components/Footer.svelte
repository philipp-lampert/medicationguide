<script>
	import logo from '$lib/assets/logo.svg';
</script>

<footer class="z-50 bg-white">
	<div class="mx-auto max-w-[1400px] sm:px-12 md:px-16 lg:px-20">
		<div class="flex h-40 flex-row place-items-stretch border-t-2 border-black">
			<a href="/" class=" ml-5 flex h-full flex-row gap-x-5 py-10">
				<img src={logo} alt="Logo" class="h-full object-contain" />
				<div class="grid min-h-full grid-rows-3 items-stretch">
					<div class="w-[3px] bg-black"></div>
					<div class="w-[3px] bg-german-red"></div>
					<div class="w-[3px] bg-german-gold"></div>
				</div>
				<div>
					<span class="duration-50 left-0 block text-left font-normal leading-5">
						Medication<br />Guide
					</span>
				</div>
			</a>
			<div
				class="mr-5 grid grow gap-y-1 self-center text-right text-sm text-gray-500 md:mx-6 md:grid-cols-4 md:text-center lg:max-w-3xl lg:text-base"
			>
				<a href="/legal/impressum">Impressum</a>
				<a href="/legal/privacy">Privacy Policy</a>
				<a href="/legal/terms">Terms of Use</a>
				<a href="/legal/disclaimer">Disclaimer</a>
			</div>
		</div>
	</div>
</footer>
