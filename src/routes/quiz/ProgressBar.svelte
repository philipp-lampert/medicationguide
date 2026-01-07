<script>
	import { fade } from 'svelte/transition';
	let { questions, selectedAnswers, currentIndex, onclick } = $props();
</script>

<div
	class="absolute z-10 flex h-4 flex-row gap-4 self-start sm:gap-6"
	out:fade={{ duration: 250 }}
	in:fade={{ duration: 350, delay: 350 }}
>
	{#each Array(questions.length) as _, index (index)}
		<div class="flex flex-row items-center">
			<button
				aria-label="Go to question"
				class="cursor-pointer rounded-full transition-all duration-500 {selectedAnswers[index] ||
				currentIndex === index
					? 'bg-black'
					: 'bg-gray-300'}
          {currentIndex === index ? 'h-[18px] w-[18px]' : 'h-3 w-3'}"
				onclick={() => onclick(index)}
			></button>
		</div>
	{/each}
</div>
