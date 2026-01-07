<script>
	import AnimatedUnderline from '$lib/components/AnimatedUnderline.svelte';
</script>

<footer class="z-50 bg-white">
	<div class="mx-auto max-w-350 sm:px-12 md:px-16 lg:px-20">
		<div
			class="flex h-32 flex-row place-items-stretch border-t-2 border-black py-6 md:h-36 md:py-8 lg:h-40 lg:py-8"
		>
			<a href="/" class="ml-5 flex h-full flex-row gap-x-5">
				<img src="/favicon.svg" alt="Caduceus" class="h-full object-contain" />
				<div class="grid min-h-full grid-rows-3 items-stretch">
					<div class="w-0.75 bg-black"></div>
					<div class="bg-german-red w-0.75"></div>
					<div class="bg-german-gold w-0.75"></div>
				</div>
				<div>
					<span class="left-0 block text-left leading-5 font-normal duration-50">
						Medication<br />Guide
					</span>
				</div>
			</a>
			<div
				class="mr-5 ml-auto flex flex-col items-end justify-between self-stretch text-right text-sm text-gray-500"
			>
				<a class="group relative inline-block w-fit" href="/donate"
					>Donate<AnimatedUnderline color="bg-gray-400" />
				</a>
				<a class="group relative inline-block w-fit" href="/legal/disclaimer"
					>Disclaimer<AnimatedUnderline color="bg-gray-400" />
				</a>
				<a class="group relative inline-block w-fit" href="/legal/terms"
					>Terms of Use<AnimatedUnderline color="bg-gray-400" />
				</a>
				<a class="group relative inline-block w-fit" href="/legal/privacy"
					>Privacy Policy<AnimatedUnderline color="bg-gray-400" />
				</a>
			</div>
		</div>
	</div>
</footer>
