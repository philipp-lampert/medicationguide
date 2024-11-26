export const questions = [
	{
		text: [
			{ content: 'Do you have a ', italic: false },
			{ content: 'fever', italic: true },
			{ content: '?', italic: false }
		],
		type: 'boolean',
		answers: [
			{ text: 'Yes', image: '/temperature-high.svg' },
			{ text: 'No', image: '/temperature-low.svg' }
		]
	},
	{
		text: [
			{ content: 'Do you have ', italic: false },
			{ content: 'local swelling ', italic: true },
			{ content: 'or ', italic: false },
			{ content: 'inflammation', italic: true },
			{ content: '?', italic: false }
		],
		type: 'boolean',
		answers: [
			{ text: 'Yes', image: '/inflammation.svg' },
			{ text: 'No', image: '/knee.svg' }
		]
	},
	{
		text: [
			{ content: 'Do you suffer from ', italic: false },
			{ content: 'any of the following?', italic: true }
		],
		type: 'multiple-choice',
		answers: [
			{ text: 'Kidney disease', image: '/kidney.svg' },
			{ text: 'Heart failure', image: '/heart.svg' },
			{ text: 'Liver disease', image: '/liver.svg' }
		]
	}
];
