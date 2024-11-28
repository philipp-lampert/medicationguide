import mild from '$lib/assets/icons/answers/mild.svg';
import moderate from '$lib/assets/icons/answers/moderate.svg';
import severe from '$lib/assets/icons/answers/severe.svg';

import temperatureHigh from '$lib/assets/icons/answers/temperature-high.svg';
import temperatureLow from '$lib/assets/icons/answers/temperature-low.svg';

import inflammation from '$lib/assets/icons/answers/inflammation.svg';
import noInflammation from '$lib/assets/icons/answers/no-inflammation.svg';

import pregnant from '$lib/assets/icons/answers/pregnant.svg';
import person from '$lib/assets/icons/answers/person.svg';

import kidney from '$lib/assets/icons/answers/kidney.svg';
import heart from '$lib/assets/icons/answers/heart.svg';
import liver from '$lib/assets/icons/answers/liver.svg';

import pills from '$lib/assets/icons/answers/pills.svg';
import noPills from '$lib/assets/icons/answers/no-pills.svg';

import child from '$lib/assets/icons/answers/child.svg';
import adult from '$lib/assets/icons/answers/adult.svg';

// 1: positive, 0.5: neutral, 0: negative
export const questions = [
	{
		// How strong is your pain?
		text: [
			{ content: 'How strong is your ', italic: false },
			{ content: 'pain', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'Mild',
				image: mild,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Moderate',
				image: moderate,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Severe',
				image: severe,
				medications: {
					ibuprofen: { value: 0.5, reason: 'See doctor for severe pain' },
					acetaminophen: { value: 0.5, reason: 'See doctor for severe pain' },
					naproxen: { value: 0.5, reason: 'See doctor for severe pain' },
					aspirin: { value: 0.5, reason: 'See doctor for severe pain' }
				}
			}
		]
	},
	{
		// Do you have a fever?
		text: [
			{ content: 'Do you have a ', italic: false },
			{ content: 'fever', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'No',
				image: temperatureLow,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Yes',
				image: temperatureHigh,
				medications: {
					ibuprofen: { value: 1, reason: 'Reduces fever' },
					acetaminophen: { value: 1, reason: 'Reduces fever' },
					naproxen: { value: 1, reason: 'Does not reduce fever' },
					aspirin: { value: 0.5, reason: 'Does not reduce fever' }
				}
			}
		]
	},
	{
		// Do you have local swelling or inflammation?
		text: [
			{ content: 'Do you have ', italic: false },
			{ content: 'local swelling ', italic: true },
			{ content: 'or ', italic: false },
			{ content: 'inflammation', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'No',
				image: noInflammation,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Yes',
				image: inflammation,
				medications: {
					ibuprofen: { value: 1, reason: 'Anti-inflammatory' },
					acetaminophen: { value: 0.5, reason: 'Does not reduce inflammation' },
					naproxen: { value: 1, reason: 'Anti-inflammatory' },
					aspirin: { value: 0.5, reason: 'Does not reduce inflammation' }
				}
			}
		]
	},
	{
		// Are you pregnant for more than 6 months?
		text: [
			{ content: 'Are you ', italic: false },
			{ content: 'pregnant ', italic: true },
			{ content: 'for more than ', italic: false },
			{ content: '6 months', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'No',
				image: person,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Yes',
				image: pregnant,
				medications: {
					ibuprofen: { value: 0, reason: 'Pregnancy > 6 months' },
					acetaminophen: { value: 1, reason: 'Safe in pregnancy' },
					naproxen: { value: 0, reason: 'Pregnancy > 6 months' },
					aspirin: { value: 0, reason: 'Pregnancy > 6 months' }
				}
			}
		]
	},
	{
		// Do you have any of the following?
		text: [
			{ content: 'Do you suffer from ', italic: false },
			{ content: 'any of the following?', italic: true }
		],
		type: 'multiple-choice',
		answers: [
			{
				text: 'Kidney disease',
				image: kidney,
				medications: {
					ibuprofen: { value: 0, reason: 'Contraindicated in kidney disease' },
					acetaminophen: { value: 0.5, reason: 'Avoid in kidney disease' },
					naproxen: { value: 0, reason: 'Contraindicated in kidney disease' },
					aspirin: { value: 0, reason: 'Contraindicated in kidney disease' }
				}
			},
			{
				text: 'Heart failure',
				image: heart,
				medications: {
					ibuprofen: { value: 0, reason: 'Contraindicated in heart failure' },
					acetaminophen: { value: 0.5, reason: 'Avoid in heart failure' },
					naproxen: { value: 0, reason: 'Contraindicated in  heart failure' },
					aspirin: { value: 0, reason: 'Contraindicated in  heart failure' }
				}
			},
			{
				text: 'Liver disease',
				image: liver,
				medications: {
					ibuprofen: { value: 0.5, reason: 'Avoid in liver failure' },
					acetaminophen: { value: 0, reason: 'Contraindicated in liver failure' },
					naproxen: { value: 0.5, reason: 'Avoid in liver failure' },
					aspirin: { value: 0.5, reason: 'Avoid in liver failure' }
				}
			}
		]
	},
	{
		// Do you currently take anticoagulants?
		text: [
			{ content: 'Do you currently take ', italic: false },
			{ content: 'anticoagulants', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'No',
				image: noPills,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			},
			{
				text: 'Yes',
				image: pills,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 0, reason: 'Increased bleeding risk' }
				}
			}
		]
	},
	{
		// Are you older than 16 years?
		text: [
			{ content: 'Are you older than ', italic: false },
			{ content: '16 years', italic: true },
			{ content: '?', italic: false }
		],
		type: 'single-choice',
		answers: [
			{
				text: 'No',
				image: child,
				medications: {
					ibuprofen: { value: 0.5, reason: 'Risk of dehydration in children' },
					acetaminophen: { value: 1, reason: 'First choice for children' },
					naproxen: { value: 0, reason: 'Contraindicated in children' },
					aspirin: { value: 0, reason: 'Contraindicated in children' }
				}
			},
			{
				text: 'Yes',
				image: adult,
				medications: {
					ibuprofen: { value: 1, reason: '' },
					acetaminophen: { value: 1, reason: '' },
					naproxen: { value: 1, reason: '' },
					aspirin: { value: 1, reason: '' }
				}
			}
		]
	}
];
