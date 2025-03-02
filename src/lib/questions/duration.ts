import lightning from '$lib/icons/answers/lightning.svg';
import time from '$lib/icons/answers/time.svg';

export const duration = {
	label: 'Have your symptoms lasted over 2 weeks?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: lightning,
			medications: {
				ibuprofen: {
					value: 1
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Overall lower risk of side effects',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Slower onset of effect',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Overall higher risk of side effects',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Yes',
			image: time,
			medications: {
				ibuprofen: {
					value: 0.5
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Lower risk of long-term side effects',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Longer duration of effect',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Higher risk of long-term side effects',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
