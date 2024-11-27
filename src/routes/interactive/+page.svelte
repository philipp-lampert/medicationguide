<script lang="ts">
	import SlidingBottomBorder from '$lib/animations/SlidingBottomBorder.svelte';
	import { fly } from 'svelte/transition';
	import { questions } from './questions';
	import { capitalizeFirstLetter } from '$lib/utils';

	const medications = ['ibuprofen', 'acetaminophen', 'naproxen', 'aspirin'];

	let currentIndex: number = $state(0);
	let direction: number = $state(1); // 1 for forward, -1 for backward

	let selectedAnswers = $state(
		[] as {
			answers: {
				text: string;
				image: string;
				medications: { [key in keyof typeof medicationScores]: { value: number; reason: string } };
			}[];
		}[]
	);

	let numSelectedAnswers = $derived(
		selectedAnswers.reduce((total, question) => total + (question.answers?.length || 0), 0)
	);

	let medicationScores = $state({
		ibuprofen: 0,
		acetaminophen: 0,
		naproxen: 0,
		aspirin: 0
	});

	$effect(() => {
		const newTotals: { [key: string]: number } = medications.reduce(
			(acc, name) => ({ ...acc, [name]: 0 }),
			{}
		);
		(
			selectedAnswers as {
				answers: {
					text: string;
					image: string;
					medications: {
						[key in keyof typeof medicationScores]: { value: number; reason: string };
					};
				}[];
			}[]
		).forEach((question) => {
			question.answers.forEach(
				(answer: {
					text: string;
					image: string;
					medications: {
						[key in keyof typeof medicationScores]: { value: number; reason: string };
					};
				}) => {
					medications.forEach((medication) => {
						if (answer.medications[medication as keyof typeof medicationScores]) {
							newTotals[medication] +=
								answer.medications[medication as keyof typeof medicationScores].value;
						}
					});
				}
			);
		});

		medicationScores = {
			ibuprofen: newTotals.ibuprofen,
			acetaminophen: newTotals.acetaminophen,
			naproxen: newTotals.naproxen,
			aspirin: newTotals.aspirin
		};
	});

	type MedicationReasons = {
		[key in keyof typeof medicationScores]: {
			positive: string[];
			neutral: string[];
			negative: string[];
		};
	};

	let medicationReasons: MedicationReasons = $state({
		ibuprofen: { positive: [], neutral: [], negative: [] },
		acetaminophen: { positive: [], neutral: [], negative: [] },
		naproxen: { positive: [], neutral: [], negative: [] },
		aspirin: { positive: [], neutral: [], negative: [] }
	});

	$effect(() => {
		{
			const newReasons: {
				[key in keyof typeof medicationScores]: {
					positive: string[];
					neutral: string[];
					negative: string[];
				};
			} = {
				aspirin: { positive: [], neutral: [], negative: [] },
				ibuprofen: { positive: [], neutral: [], negative: [] },
				naproxen: { positive: [], neutral: [], negative: [] },
				acetaminophen: { positive: [], neutral: [], negative: [] }
			};

			// Loop through selected answers
			selectedAnswers.forEach((question) => {
				question.answers.forEach((answer) => {
					// Loop through each medication
					for (const medication of Object.keys(newReasons)) {
						const medicationData = answer.medications[medication as keyof typeof medicationScores];

						// If medication data exists
						if (medicationData && medicationData.reason !== '') {
							const reason = medicationData.reason;
							const value = medicationData.value;

							// Categorize based on value
							if (value === 1) {
								newReasons[medication as keyof typeof medicationScores].positive.push(reason);
							} else if (value === 0.5) {
								newReasons[medication as keyof typeof medicationScores].neutral.push(reason);
							} else if (value === 0) {
								newReasons[medication as keyof typeof medicationScores].negative.push(reason);
							}
						}
					}
				});
			});

			// Update the medicationReasons store
			medicationReasons = newReasons;
		}
	});

	function answerSelection(answer: {
		text: string;
		image: string;
		medications: { [key in keyof typeof medicationScores]: { value: number; reason: string } };
	}) {
		if (!selectedAnswers[currentIndex]) {
			// Initialize the index if it doesn't exist
			selectedAnswers[currentIndex] = { answers: [] };
		}

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
		if (questions[currentIndex].type === 'boolean') {
			currentIndex++;
		}
		console.log($state.snapshot(selectedAnswers));
		console.log($state.snapshot(numSelectedAnswers));
		console.log($state.snapshot(medicationScores));
		console.log($state.snapshot(medicationReasons));
	}

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
				percentages[medication] = (totalScore / numSelectedAnswers) * 100;
				return percentages;
			},
			{} as { [key: string]: number }
		);
	}

	function nextQuestion(event: Event) {
		event.preventDefault();
		if (selectedAnswers[currentIndex].answers.length > 0 && currentIndex < questions.length - 1) {
			direction = 1;
			currentIndex++;
		} else {
			// User reached the end of the questions
			currentIndex++; // Increment to trigger the results section
		}
	}

	function noneOfTheAbove() {
		selectedAnswers[currentIndex] = { answers: [] };
		nextQuestion(new Event('submit'));
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
							class:selected={selectedAnswers[currentIndex]?.answers.some(
								(a) => a.text === answer.text
							)}
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

					{#if questions[currentIndex].type === 'multiple-choice'}
						<button
							type="button"
							onclick={noneOfTheAbove}
							class="group relative flex flex-row items-center gap-2.5 overflow-hidden bg-white px-0.5 py-0.5 font-medium text-green-800"
						>
							None of the above
							<img src="/none.svg" alt="None of the above" class="h-3.5" />
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
					<img src="/arrow-turn-around.svg" alt="Previous" class="h-3.5" />
					Restart
					<SlidingBottomBorder />
				</a>
				<a
					href="/"
					class="group relative flex flex-row items-center gap-2 overflow-hidden bg-white px-0.5 py-0.5 font-medium"
				>
					Exit
					<img src="/angle-double-right.svg" alt="Skip" class="h-3.5" />
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
