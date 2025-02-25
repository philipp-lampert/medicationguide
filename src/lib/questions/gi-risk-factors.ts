import stomach from '$lib/icons/answers/stomach.svg';
import stomachPain from '$lib/icons/answers/stomach-pain.svg';

export const giRiskFactors = {
	label: 'Do you have heartburn or stomach problems?',
	type: 'singleChoice',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: stomach,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Yes',
			image: stomachPain,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'May further damage stomach',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Does not affect stomach',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'May further damage stomach',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'May further damage stomach',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
