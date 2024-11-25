<script>
	import { fly } from 'svelte/transition';

	let currentIndex = $state(0);
	let direction = $state(1); // 1 for forward, -1 for backward

	const questions = [
		{
			text: 'Do you have a fever?',
			type: 'boolean',
			answers: ['Yes', 'No']
		},
		{
			text: 'Choose your pain intensity',
			type: 'multiple-choice',
			answers: ['Mild', 'Moderate', 'Severe']
		},
		{
			text: 'Do you have any allergies?',
			type: 'boolean',
			answers: ['Yes', 'No']
		}
	];

	function handleAnswerSelection() {
		if (currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
		}
	}

	function skipQuestion() {
		if (currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
		}
	}

	function goBack() {
		if (currentIndex > 0) {
			direction = -1;
			currentIndex--;
		}
	}
</script>

<div class="container flex h-full flex-col items-center justify-center">
	{#each questions as question, index (index)}
		{#if index === currentIndex}
			<div
				class="absolute flex w-full flex-col items-center justify-center text-center"
				in:fly={{ y: 500 * direction, duration: 1000 }}
				out:fly={{ y: -500 * direction, duration: 1000 }}
			>
				<p class="mb-6 text-2xl font-medium">{question.text}</p>

				{#if question.type === 'boolean'}
					<div class="flex gap-4">
						{#each question.answers as answer}
							<button
								onclick={handleAnswerSelection}
								class="button flex min-h-24 min-w-24 justify-center border border-3 bg-white px-2 py-2 font-medium transition duration-200 hover:bg-blue-600"
							>
								{answer}
							</button>
						{/each}
					</div>
				{/if}

				{#if question.type === 'multiple-choice'}
					<div class="flex gap-4">
						{#each question.answers as answer}
							<button
								onclick={handleAnswerSelection}
								class="button bg-green-500 px-6 py-3 font-medium text-white transition duration-200 hover:bg-green-600"
							>
								{answer}
							</button>
						{/each}
					</div>
				{/if}

				<!-- Navigation Buttons -->
				<div class="mt-6 flex gap-4">
					{#if currentIndex > 0}
						<button
							onclick={goBack}
							class="button bg-gray-500 px-6 py-3 font-medium text-white transition duration-200 hover:bg-gray-600"
						>
							Back
						</button>
					{/if}
					<button
						onclick={skipQuestion}
						class="button bg-red-500 px-6 py-3 font-medium text-white transition duration-200 hover:bg-red-600"
					>
						Skip
					</button>
				</div>
			</div>
		{/if}
	{/each}
</div>
