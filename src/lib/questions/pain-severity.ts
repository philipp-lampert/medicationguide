import mild from '$lib/icons/answers/mild.svg';
import moderate from '$lib/icons/answers/moderate.svg';
import severe from '$lib/icons/answers/severe.svg';

export const painSeverity = {
	label: 'How strong is your pain?',
	multipleChoice: false,
	answers: [
		{
			label: 'Mild',
			image: mild,
			medications: {
				ibuprofen: {
					value: 1
				},
				paracetamol: {
					value: 1
				},
				naproxen: {
					value: 1
				},
				aspirin: {
					value: 1
				}
			}
		},
		{
			label: 'Moderate',
			image: moderate,
			medications: {
				ibuprofen: {
					value: 1
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Slightly weaker pain relief',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 1
				},
				aspirin: {
					value: 1
				}
			}
		},
		{
			label: 'Severe',
			image: severe,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'See doctor for severe pain',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Likely insufficient for severe pain',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'See doctor for severe pain',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'See doctor for severe pain',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
