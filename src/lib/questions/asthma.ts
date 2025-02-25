import lung from '$lib/icons/answers/lung.svg';
import lungFaded from '$lib/icons/answers/lung-faded.svg';

export const asthma = {
	label: 'Do you have asthma?',
	type: 'singleChoice',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: lungFaded,
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
			image: lung,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe with asthma',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
