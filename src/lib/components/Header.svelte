<script>
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import logo from '$lib/assets/logo.svg';
	import arrowDoubleRight from '$lib/assets/icons/buttons/arrow-double-right.svg';

	let yScroll = $state(0);
	let threshold = 60;
	let buffer = 50;
	let isShrunk = $state(false);

	$effect(() => {
		if (yScroll >= threshold + buffer) {
			isShrunk = true;
		} else if (yScroll <= threshold - buffer) {
			isShrunk = false;
		}
	});
</script>

<svelte:window bind:scrollY={yScroll} />

<header class="sticky top-0 z-40 bg-white">
	<div class="container">
		<div
			class="flex flex-row items-center border-b-2 border-black transition-all duration-500 {isShrunk
				? 'h-16'
				: 'h-32'}"
		>
			<nav class="ml-3 mt-auto font-medium">
				<ul class="flex h-16 flex-row items-center gap-x-6">
					<li><a class="block p-2" href="/">Home</a></li>
					<li><a class="block p-2" href="/knowledge">Knowledge base</a></li>
					<li><a class="block p-2" href="/about">About</a></li>
					<li><a class="block p-2" href="/donate">Donate</a></li>
				</ul>
			</nav>
			<div
				class="ml-auto mr-5 flex h-full flex-row gap-x-5 transition-all duration-500 {isShrunk
					? 'py-3'
					: 'py-7'}"
			>
				<img src={logo} alt="Caduceus" class="h-full object-contain" />
				<div class="grid min-h-full grid-rows-3 items-stretch">
					<div class="w-[3px] bg-black"></div>
					<div class="w-[3px] bg-german-red"></div>
					<div class="w-[3px] bg-german-gold"></div>
				</div>
				<div class="relative">
					<span
						class="duration-50 absolute left-0 block text-left font-normal leading-5 transition-all duration-200 {isShrunk
							? 'opacity-0'
							: 'opacity-100 delay-200'}"
					>
						Medication<br />Guide
					</span>
					<a
						href="/interactive"
						class="group top-1/2 flex translate-y-1/2 flex-row items-center gap-2 text-sm font-medium transition-all duration-200 {isShrunk
							? 'opacity-100 delay-200'
							: 'opacity-0'}"
					>
						Start Guide
						<img src={arrowDoubleRight} alt="Start Guide" class="h-3" />
						<SlidingBottomBorder />
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
