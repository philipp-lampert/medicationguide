<script lang="ts">
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import { fly } from 'svelte/transition';
	import { questions } from './questions';

	let currentIndex = $state(0);
	let direction = $state(1); // 1 for forward, -1 for backward
	let selectedAnswers: string[] = $state([]); // Tracks answers for the current question
	let isAnimated = $state(false);

	// Animate the next question button when an answer is selected
	$effect(() => {
		if (selectedAnswers.length > 0) {
			setTimeout(() => {
				isAnimated = true;
			}, 300);
		} else {
			isAnimated = false;
		}
	});

	function handleAnswerSelection(answer: string) {
		if (questions[currentIndex].type === 'multiple-choice') {
			// Toggle answer selection for multiple-choice questions
			if (selectedAnswers.includes(answer)) {
				selectedAnswers = selectedAnswers.filter((a) => a !== answer);
			} else {
				selectedAnswers = [...selectedAnswers, answer];
			}
		} else {
			// For single-choice questions, set the answer and move to the next question
			selectedAnswers = [answer];
			if (currentIndex < questions.length - 1) {
				direction = 1;
				currentIndex++;
				selectedAnswers = []; // Reset for the next question
			}
		}
	}

	function nextQuestion(event: Event) {
		event.preventDefault();
		if (selectedAnswers.length > 0 && currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
			selectedAnswers = []; // Reset for the next question
		}
	}

	function skipQuestion() {
		if (currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
			selectedAnswers = []; // Reset for the next question
		}
	}

	function goBack() {
		if (currentIndex > 0) {
			direction = -1;
			currentIndex--;
			selectedAnswers = []; // Reset for the previous question
		}
	}
</script>

<div class="container flex h-full flex-col items-center justify-center">
	{#each questions as question, index (index)}
		{#if index === currentIndex}
			<form
				class="absolute flex flex-col items-center justify-center gap-10 rounded-3xl border border-3 border-black bg-white px-20 py-12 text-center drop-shadow-2xl"
				in:fly={{ y: 750 * direction, duration: 1000 }}
				out:fly={{ y: -750 * direction, duration: 1000 }}
				onsubmit={nextQuestion}
			>
				<div class="flex flex-col gap-2">
					<p class="font-times text-4xl tracking-medium-tight">
						{#each question.text as part}
							{#if typeof part === 'string'}
								{part}
							{:else}
								<span class:italic={part.italic}>{part.content}</span>
							{/if}
						{/each}
					</p>
					{#if questions[currentIndex].type === 'multiple-choice'}
						<span class="text-lg italic">Select all that apply.</span>
					{/if}
				</div>
				<div class="flex flex-wrap gap-6">
					{#each question.answers as answer}
						<button
							type="button"
							onclick={() => handleAnswerSelection(answer.text)}
							class=" hover flex min-h-24 min-w-24 flex-col items-center justify-center gap-2.5 rounded-2xl border border-3 border-black bg-white px-8 py-6 text-lg font-medium text-black drop-shadow-lg transition-all duration-100"
							class:selected={selectedAnswers.includes(answer.text)}
						>
							{answer.text}
							{#if answer.image}
								<img src={answer.image} alt={answer.text} class="max-h-16" />
							{/if}
						</button>
					{/each}
				</div>

				<!-- Navigation Buttons -->
				<div class="flex gap-10">
					{#if currentIndex > 0}
						<button
							type="button"
							onclick={goBack}
							class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
						>
							<img src="/arrow-turn-around.svg" alt="Previous" class="h-3.5" />
							Previous
							<SlidingBottomBorder />
						</button>
					{:else}
						<a
							href="/"
							class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
						>
							<img src="/arrow-turn-around.svg" alt="Exit" class="h-3.5" />
							Exit
							<SlidingBottomBorder />
						</a>
					{/if}
					{#if selectedAnswers.length === 0}
						{#if questions[currentIndex].type === 'multiple-choice'}
							<button
								type="button"
								onclick={skipQuestion}
								class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium text-green-800"
							>
								None of the above
								<img src="/none.svg" alt="None of the above" class="h-3.5" />
								<SlidingBottomBorder />
							</button>
						{:else}
							<button
								type="button"
								onclick={skipQuestion}
								class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
								disabled={selectedAnswers.length > 0}
							>
								Skip
								<img src="/angle-double-right.svg" alt="Skip" class="h-3.5" />
								<SlidingBottomBorder />
							</button>
						{/if}
					{/if}
					{#if selectedAnswers.length > 0}
						<button
							type="submit"
							class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
						>
							Next Question
							<img src="/angle-double-right.svg" alt="Next Question" class="h-3.5" />
							<span
								class="animate-span absolute bottom-0 left-0 z-50 h-0.5 w-full scale-x-0 transform bg-black"
							></span>
						</button>
					{/if}
				</div>
			</form>
		{/if}
	{/each}
</div>

<style>
	.selected {
		@apply border-4 border-red-800 bg-red-50 shadow-inner-strong drop-shadow-none;
	}

	.hover {
		@apply transition-all duration-100 hover:border-red-800 hover:bg-red-50;
	}

	/* Define the animation for the expanding and contracting effect */
	@keyframes spanAnimation {
		0% {
			transform: scaleX(0);
		}
		50% {
			transform: scaleX(1);
		}
		100% {
			transform: scaleX(0);
		}
	}

	/* Apply the animation to the span with class animate-span */
	.animate-span {
		animation: spanAnimation 2s ease-in-out infinite;
	}
</style>
