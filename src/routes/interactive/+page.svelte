<script lang="ts">
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import arrowDoubleRight from '$lib/assets/icons/buttons/arrow-double-right.svg';
	import none from '$lib/assets/icons/buttons/none.svg';
	import turnAround from '$lib/assets/icons/buttons/arrow-turn-around.svg';
	import { fly } from 'svelte/transition';
	import { questions } from './questions';
	import { sideEffects } from './side-effects';
	import { capitalizeFirstLetter } from '$lib/utils';

	let currentIndex: number = $state(0);
	let direction: number = $state(1); // 1: forward, -1: backward

	const medications = ['ibuprofen', 'acetaminophen', 'naproxen', 'aspirin'] as const;
	type Medications = (typeof medications)[number];

	// Answer selection
	let selectedAnswers = $state(
		[] as {
			answers: {
				text: string;
				image: string;
				medications: { [K in Medications]: { value: number; reason: string } };
			}[];
		}[]
	);

	let numSelectedAnswers = $derived(
		selectedAnswers.reduce((total, question) => total + (question.answers?.length || 0), 0)
	);

	function answerSelection(answer: {
		text: string;
		image: string;
		medications: { [key in keyof typeof medicationScores]: { value: number; reason: string } };
	}) {
		if (!selectedAnswers[currentIndex]) {
			// Initialize index if it doesn't exist
			selectedAnswers[currentIndex] = { answers: [] };
		}

		if (questions[currentIndex].type === 'single-choice') {
			// Replace any existing answer
			selectedAnswers[currentIndex].answers = [answer];
			currentIndex++;
			direction = 1;
		} else {
			// For multiple-choice, toggle the answer selection
			const existingAnswerIndex = selectedAnswers[currentIndex].answers.findIndex(
				(existingAnswer) => JSON.stringify(existingAnswer) === JSON.stringify(answer)
			);

			if (existingAnswerIndex > -1) {
				// If the answer exists, remove it (deselection)
				selectedAnswers[currentIndex].answers.splice(existingAnswerIndex, 1);
			} else {
				// If the answer does not exist, add it to the array
				selectedAnswers[currentIndex].answers.push(answer);
			}
		}
	}

	// Medication scores
	let medicationScores: Record<Medications, number> = $derived(
		medications.reduce(
			(acc, name) => ({
				...acc,
				[name]:
					selectedAnswers
						.flatMap((question) =>
							question.answers.map((answer) => answer.medications[name as Medications]?.value || 0)
						)
						.reduce((sum, value) => sum + value, 0) + (name === 'acetaminophen' ? 0.5 : 0) // Add 0.5 to acetaminophen due to reduced risk of side effects
			}),
			{} as Record<Medications, number>
		)
	);

	// Medication reasons
	type MedicationReasons = Record<
		Medications,
		{
			positive: string[];
			neutral: string[];
			negative: string[];
		}
	>;

	let medicationReasons: MedicationReasons = $derived(
		medications.reduce((acc, medication) => {
			const userReasons: { positive: string[]; neutral: string[]; negative: string[] } = {
				positive: [],
				neutral: [],
				negative: []
			};

			selectedAnswers.forEach((question) => {
				question.answers.forEach((answer) => {
					const medicationData = answer.medications[medication];

					if (medicationData?.reason) {
						const categorizeReason = (value: number) => {
							if (value === 1) return 'positive';
							if (value === 0.5) return 'neutral';
							if (value === 0) return 'negative';
							return null;
						};

						const category = categorizeReason(medicationData.value);
						if (category) {
							userReasons[category].push(medicationData.reason);
						}
					}
				});
			});

			return {
				...acc,
				[medication]: {
					positive: [...sideEffects[medication].positive, ...userReasons.positive],
					neutral: [...sideEffects[medication].neutral, ...userReasons.neutral],
					negative: [...sideEffects[medication].negative, ...userReasons.negative]
				}
			};
		}, {} as MedicationReasons)
	);

	// Calculate percentages
	function calculatePercentages() {
		const totalScores = Object.entries(medicationScores).reduce(
			(scores, [medication, score]) => {
				scores[medication] = score;
				return scores;
			},
			{} as { [key: string]: number }
		);

		return Object.entries(totalScores).reduce(
			(percentages, [medication, totalScore]) => {
				percentages[medication] = (totalScore / (numSelectedAnswers + 0.5)) * 100; // Add 0.5 to the denominator to account for acetaminophen's reduced risk of side effects
				return percentages;
			},
			{} as { [key: string]: number }
		);
	}

	// Navigation buttons
	function nextQuestion() {
		currentIndex++;
		direction = 1;
	}

	function noneOfTheAbove() {
		selectedAnswers[currentIndex].answers = [
			{
				text: 'None of the above',
				image: '',
				medications: Object.fromEntries(
					medications.map((med) => [med, { value: 1, reason: '' }])
				) as Record<Medications, { value: number; reason: string }>
			}
		];
		nextQuestion();
	}

	function goBack() {
		if (currentIndex > 0) {
			direction = -1;
			currentIndex--;
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
							onclick={() => answerSelection(answer)}
							class="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2.5 rounded-2xl border-3 border-white bg-gray-200 px-8 py-6 text-lg font-medium text-black drop-shadow-lg transition-all duration-300 hover:border-black hover:bg-white hover:drop-shadow-2xl"
							class:selected={questions[currentIndex].type === 'single-choice'
								? selectedAnswers[currentIndex]?.answers[0]?.text === answer.text
								: selectedAnswers[currentIndex]?.answers.some((a) => a.text === answer.text)}
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
							<img src={turnAround} alt="Previous" class="h-3.5" />
							Previous
							<SlidingBottomBorder />
						</button>
					{:else}
						<a
							href="/"
							class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
						>
							<img src={turnAround} alt="Exit" class="h-3.5" />
							Exit
							<SlidingBottomBorder />
						</a>
					{/if}

					{#if questions[currentIndex].type === 'multiple-choice'}
						<button
							type="button"
							onclick={noneOfTheAbove}
							class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium text-green-800"
						>
							None of the above
							<img src={none} alt="None of the above" class="h-3.5" />
							<SlidingBottomBorder />
						</button>
					{/if}

					{#if selectedAnswers[currentIndex]?.answers.length > 0}
						<button
							type="button"
							onclick={nextQuestion}
							class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
							>{#if currentIndex < questions.length - 1}
								Next Question
							{:else}
								Show Results
							{/if}
							<img src={arrowDoubleRight} alt="Next Question" class="h-3.5" />
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
				{#each Object.entries(calculatePercentages()).sort(([, percentageA], [, percentageB]) => percentageB - percentageA) as [medication, percentage]}
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
							{#if medicationReasons[medication as keyof MedicationReasons].positive.length > 0}
								<div class="rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each medicationReasons[medication as keyof MedicationReasons].positive as reason}
											<li>- {reason}</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Moderate Reasons -->
							{#if medicationReasons[medication as keyof MedicationReasons].neutral.length > 0}
								<div class="rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each medicationReasons[medication as keyof MedicationReasons].neutral as reason}
											<li>- {reason}</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Negative Reasons -->
							{#if medicationReasons[medication as keyof MedicationReasons].negative.length > 0}
								<div class="rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-normal">
									<ul>
										{#each medicationReasons[medication as keyof MedicationReasons].negative as reason}
											<li>- {reason}</li>
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
					<img src={turnAround} alt="Previous" class="h-3.5" />
					Restart
					<SlidingBottomBorder />
				</a>
				<a
					href="/"
					class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
				>
					Exit
					<img src={arrowDoubleRight} alt="Skip" class="h-3.5" />
					<SlidingBottomBorder />
				</a>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.selected {
		@apply border-4 border-black bg-white shadow-inner-strong drop-shadow-none;
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
