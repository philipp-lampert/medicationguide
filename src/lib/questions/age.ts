import child from '$lib/icons/answers/child.svg';
import adult from '$lib/icons/answers/adult.svg';

export const age = {
	label: 'Are you older than 16 years?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: child,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Use with caution in children',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safest option for children',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Not recommended for children',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Not safe for children < 16',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Yes',
			image: adult,
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
		}
	]
};
