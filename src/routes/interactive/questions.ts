// 1: positive, 0.5: moderate, 0: negative
export const questions = [
	{
		text: [
			{ content: 'Do you have a ', italic: false },
			{ content: 'fever', italic: true },
			{ content: '?', italic: false }
		],
		type: 'boolean',
		answers: [
			{
				text: 'Yes',
				image: '/temperature-high.svg',
				medications: {
					ibuprofen: { value: 1, reason: 'Reduces fever' },
					acetaminophen: { value: 1, reason: 'Reduces fever' },
					naproxen: { value: 0.5, reason: 'Does not reduce fever' },
					aspirin: { value: 0.5, reason: 'Does not reduce fever' }
				}
			},
			{
				text: 'No',
				image: '/temperature-low.svg',
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			}
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
			{
				text: 'Yes',
				image: '/inflammation.svg',
				medications: {
					ibuprofen: { value: 1, reason: 'Anti-inflammatory' },
					acetaminophen: { value: 0.5, reason: 'Does not reduce inflammation' },
					naproxen: { value: 1, reason: 'Anti-inflammatory' },
					aspirin: { value: 0.5, reason: 'Does not reduce inflammation' }
				}
			},
			{
				text: 'No',
				image: '/knee.svg',
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			}
		]
	},
	{
		text: [
			{ content: 'Do you suffer from ', italic: false },
			{ content: 'any of the following?', italic: true }
		],
		type: 'multiple-choice',
		answers: [
			{
				text: 'Kidney disease',
				image: '/kidney.svg',
				medications: {
					ibuprofen: { value: 0, reason: 'Avoid in kidney disease' },
					acetaminophen: { value: 1, reason: 'Kidney-friendly' },
					naproxen: { value: 0, reason: 'Avoid in kidney disease' },
					aspirin: { value: 0, reason: 'Avoid in kidney disease' }
				}
			},
			{
				text: 'Heart failure',
				image: '/heart.svg',
				medications: {
					ibuprofen: { value: 0, reason: 'Avoid in heart failure' },
					acetaminophen: { value: 0.5, reason: 'Less risky in heart failure' },
					naproxen: { value: 0, reason: 'Avoid in heart failure' },
					aspirin: { value: 0, reason: 'Avoid in heart failure' }
				}
			},
			{
				text: 'Liver disease',
				image: '/liver.svg',
				medications: {
					ibuprofen: { value: 0.5, reason: 'Avoid in liver failure' },
					acetaminophen: { value: 0, reason: 'Contraindicated in liver failure' },
					naproxen: { value: 0.5, reason: 'Avoid in liver failure' },
					aspirin: { value: 0.5, reason: 'Avoid in liver failure' }
				}
			}
		]
	}
];
