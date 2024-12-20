<script>
	import { fade } from 'svelte/transition';
	const { questions, selectedAnswers, currentIndex } = $props();
</script>

<div
	class="absolute z-10 flex h-4 flex-row gap-5 self-start sm:gap-6"
	out:fade={{ duration: 250 }}
	in:fade={{ duration: 350, delay: 350 }}
>
	{#each questions as _, index}
		<div class="flex flex-row items-center">
			<div
				class="rounded-full transition-all duration-500 {selectedAnswers[index] ||
				currentIndex === index
					? 'bg-black'
					: 'bg-gray-300'}
          {currentIndex === index ? 'h-[18px] w-[18px]' : 'h-3 w-3'}"
			></div>
		</div>
	{/each}
</div>
