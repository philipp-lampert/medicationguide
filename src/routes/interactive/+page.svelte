<script lang="ts">
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import { fly } from 'svelte/transition';
	import { questions } from './questions';
	import { capitalizeFirstLetter } from '$lib/utils';

	let currentIndex = $state(0);
	let direction = $state(1); // 1 for forward, -1 for backward
	let selectedAnswers: string[] = $state([]); // Tracks answers for the current question

	let positiveReasons = $state(new Set());
	let moderateReasons = $state(new Set());
	let negativeReasons = $state(new Set());

	interface MedicationScores {
		ibuprofen: { score: number; reasons: Set<string> };
		acetaminophen: { score: number; reasons: Set<string> };
		naproxen: { score: number; reasons: Set<string> };
		aspirin: { score: number; reasons: Set<string> };
	}

	let medicationScores = $state({
		ibuprofen: { score: 0, reasons: new Set<{ reason: string; type: string }>() },
		acetaminophen: { score: 0, reasons: new Set<{ reason: string; type: string }>() },
		naproxen: { score: 0, reasons: new Set<{ reason: string; type: string }>() },
		aspirin: { score: 0, reasons: new Set<{ reason: string; type: string }>() }
	});

	function handleAnswerSelection(answer: {
		text: string;
		image: string;
		medications: { [key in keyof MedicationScores]: { value: number; reason: string } };
	}) {
		if (questions[currentIndex].type === 'multiple-choice') {
			// Toggle selection for multiple-choice questions
			if (selectedAnswers.includes(answer.text)) {
				selectedAnswers = selectedAnswers.filter((a) => a !== answer.text);
				// Subtract scores and reasons
				for (const [medication, { value, reason }] of Object.entries(answer.medications)) {
					medicationScores[medication as keyof MedicationScores].score -= value;
					// Check if reason is not empty before deleting
					if (reason && reason.trim() !== '') {
						medicationScores[medication as keyof MedicationScores].reasons.delete({
							reason,
							type: value === 1 ? 'positive' : value === 0.5 ? 'moderate' : 'negative'
						});
					}
				}
			} else {
				selectedAnswers = [...selectedAnswers, answer.text];
				// Add scores and reasons
				for (const [medication, { value, reason }] of Object.entries(answer.medications)) {
					medicationScores[medication as keyof MedicationScores].score += value;
					// Check if reason is not empty before adding
					if (reason && reason.trim() !== '') {
						if (value === 1) {
							medicationScores[medication as keyof MedicationScores].reasons.add({
								reason,
								type: 'positive'
							});
						} else if (value === 0.5) {
							medicationScores[medication as keyof MedicationScores].reasons.add({
								reason,
								type: 'moderate'
							});
						} else {
							medicationScores[medication as keyof MedicationScores].reasons.add({
								reason,
								type: 'negative'
							});
						}
					}
				}
			}
		} else {
			// Single-choice
			selectedAnswers = [answer.text];
			// Add scores and reasons for single-choice questions
			for (const [medication, { value, reason }] of Object.entries(answer.medications)) {
				medicationScores[medication as keyof MedicationScores].score += value;
				// Check if reason is not empty before adding
				if (reason && reason.trim() !== '') {
					if (value === 1) {
						medicationScores[medication as keyof MedicationScores].reasons.add({
							reason,
							type: 'positive'
						});
					} else if (value === 0.5) {
						medicationScores[medication as keyof MedicationScores].reasons.add({
							reason,
							type: 'moderate'
						});
					} else {
						medicationScores[medication as keyof MedicationScores].reasons.add({
							reason,
							type: 'negative'
						});
					}
				}
			}
			// Move to the next question if applicable
			if (currentIndex < questions.length - 1) {
				direction = 1;
				currentIndex++;
				selectedAnswers = []; // Reset for the next question
			}
		}
	}

	function calculateFitPercentages() {
		const totalPossibleScore = questions.length; // One score per question

		const totalScores = Object.entries(medicationScores).reduce(
			(scores, [medication, { score }]) => {
				scores[medication] = score;
				return scores;
			},
			{} as { [key: string]: number }
		);

		return Object.entries(totalScores).reduce(
			(percentages, [medication, totalScore]) => {
				percentages[medication] = (totalScore / totalPossibleScore) * 100;
				return percentages;
			},
			{} as { [key: string]: number }
		);
	}

	$effect(() => {
		questions.forEach((question) => {
			question.answers.forEach((answer) => {
				if (answer.medications) {
					Object.entries(answer.medications).forEach(([medication, { value, reason }]) => {
						// Ensure reason is not empty before adding it
						if (reason && reason.trim() !== '') {
							if (value === 1) {
								positiveReasons.add(reason);
							} else if (value === 0) {
								moderateReasons.add(reason);
							} else {
								negativeReasons.add(reason);
							}
						}
					});
				}
			});
		});
	});

	function nextQuestion(event: Event) {
		event.preventDefault();
		if (selectedAnswers.length > 0 && currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
			selectedAnswers = []; // Reset for the next question
		} else {
			// User reached the end of the questions
			currentIndex++; // Increment to trigger the results section
		}
	}

	function skipQuestion() {
		// Treat skipping as a neutral answer for all medications
		for (const medication in medicationScores) {
			medicationScores[medication as keyof MedicationScores].score += 1;
			medicationScores[medication as keyof MedicationScores].reasons.add({
				reason: 'Question skipped',
				type: 'neutral'
			});
		}
		// Proceed to the next question
		if (currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
			selectedAnswers = []; // Reset selections
		} else {
			// If the last question, show results
			currentIndex++;
		}
	}

	function handleNoneOfTheAbove() {
		// Assign a neutral score (1) to all medications
		for (const medication in medicationScores) {
			medicationScores[medication as keyof MedicationScores].score += 1;
			medicationScores[medication as keyof MedicationScores].reasons.add({
				reason: 'No preference selected',
				type: 'neutral'
			});
		}
		// Move to the next question
		nextQuestion(new Event('submit'));
	}

	function goBack() {
		if (currentIndex > 0) {
			direction = -1;
			currentIndex--;
			selectedAnswers = []; // Reset for the previous question
		}
	}
</script>

<div class="container my-16 flex h-full flex-col items-center justify-center">
	{#each questions as question, index (index)}
		{#if index === currentIndex}
			<form
				class="absolute flex flex-col items-center justify-center gap-10 rounded-3xl border-3 border-black bg-white px-20 py-12 text-center drop-shadow-2xl"
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
							onclick={() => handleAnswerSelection(answer)}
							class=" hover flex min-h-24 min-w-24 flex-col items-center justify-center gap-2.5 rounded-2xl border-3 border-black bg-white px-8 py-6 text-lg font-medium text-black drop-shadow-lg transition-all duration-100"
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
				<div class="flex gap-6">
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
								onclick={handleNoneOfTheAbove}
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
							type="button"
							onclick={nextQuestion}
							class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
							>{#if currentIndex < questions.length - 1}
								Next Question
							{:else}
								Show Results
							{/if}
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
	{#if currentIndex === questions.length}
		<div class="flex flex-col items-center gap-12" in:fly={{ y: 750 * direction, duration: 1000 }}>
			<h1 class="h1 italic">Results</h1>
			<div class="grid grid-cols-4 gap-4">
				{#each Object.entries(calculateFitPercentages()).sort(([, percentageA], [, percentageB]) => percentageB - percentageA) as [medication, percentage]}
					<div class="rounded-2xl border-2 border-black bg-white p-5 drop-shadow-xl">
						<h2 class="h3">{capitalizeFirstLetter(medication)}</h2>
						<p class="mb-4 font-normal">
							{(percentage as number).toFixed(0)}% match
						</p>

						<div class="flex flex-col gap-2">
							<!-- Progress Bar -->
							<div class="h-2 w-full rounded bg-gray-200">
								<div
									class="h-full rounded"
									style="width: {(percentage as number).toFixed(0)}%; 
						 background-color: hsl({(percentage as number) * 1.2}, 70%, 50%)"
								></div>
							</div>

							<!-- Positive Reasons -->
							{#if [...medicationScores[medication as keyof MedicationScores].reasons].some((r) => r.type === 'positive')}
								<div class="rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each [...medicationScores[medication as keyof MedicationScores].reasons].filter((r) => r.type === 'positive') as reason}
											<li>- {reason.reason}</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Moderate Reasons -->
							{#if [...medicationScores[medication as keyof MedicationScores].reasons].some((r) => r.type === 'moderate')}
								<div class="rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each [...medicationScores[medication as keyof MedicationScores].reasons].filter((r) => r.type === 'moderate') as reason}
											<li>- {reason.reason}</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Negative Reasons -->
							{#if [...medicationScores[medication as keyof MedicationScores].reasons].some((r) => r.type === 'negative')}
								<div class="rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each [...medicationScores[medication as keyof MedicationScores].reasons].filter((r) => r.type === 'negative') as reason}
											<li>- {reason.reason}</li>
										{/each}
									</ul>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<div class="flex flex-row gap-6">
				<a
					data-sveltekit-reload
					href="/interactive"
					class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
				>
					<img src="/arrow-turn-around.svg" alt="Previous" class="h-3.5" />
					Restart
					<SlidingBottomBorder />
				</a>
				<a
					href="/"
					class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
				>
					Home
					<img src="/angle-double-right.svg" alt="Skip" class="h-3.5" />
					<SlidingBottomBorder />
				</a>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
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
