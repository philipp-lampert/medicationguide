<script>
	import logo from '$lib/assets/logo.svg';
</script>

<footer class="z-50 bg-white">
	<div class="mx-auto max-w-[1400px] sm:px-12 md:px-16 lg:px-20">
		<div class="flex h-40 flex-row place-content-between border-t-2 border-black">
			<div class="ml-5 flex h-full flex-row gap-x-5 py-10">
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
			</div>
		</div>
	</div>
</footer>
