import inflammationIcon from '$lib/icons/answers/inflammation.svg';
import noInflammation from '$lib/icons/answers/no-inflammation.svg';

export const inflammation = {
	label: 'Do you have joint pain or inflammation?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: noInflammation,
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
			label: 'Yes',
			image: inflammationIcon,
			medications: {
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Strong anti-inflammatory',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Not anti-inflammatory',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Strong anti-inflammatory',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Moderate anti-inflammatory',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
