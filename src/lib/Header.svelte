<script>
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

<header class="sticky top-0 bg-white">
	<div
		class="border-black container flex max-w-screen-xl flex-row items-center border-b-2 transition-all duration-500 {isShrunk
			? 'h-16'
			: 'h-32'}"
	>
		<nav class="ml-4 mt-auto font-medium">
			<ul class="flex h-16 flex-row items-center space-x-6">
				<li><a class="block p-2" href="/">Home</a></li>
				<li><a class="block p-2" href="/knowledge">Knowledge base</a></li>
				<li><a class="block p-2" href="/about">About</a></li>
				<li><a class="block p-2" href="/donate">Donate</a></li>
			</ul>
		</nav>
		<div
			class=" ml-auto mr-6 flex h-full flex-row space-x-5 transition-all duration-500 {isShrunk
				? 'py-3'
				: 'py-7'}"
		>
			<img src="/caduceus.jpg" alt="Caduceus" class="h-full object-contain" />
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
				<button
					class="top-1/2 block flex translate-y-1/2 flex-row gap-2 text-sm font-medium transition-all duration-200 {isShrunk
						? 'opacity-100 delay-200'
						: 'opacity-0'}"
				>
					Start Guide
					<img src="/angle-double-right.svg" alt="Start Guide" class="h-3" />
				</button>
			</div>
		</div>
	</div>
</header>
