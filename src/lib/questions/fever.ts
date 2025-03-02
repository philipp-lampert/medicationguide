import temperatureHigh from '$lib/icons/answers/temperature-high.svg';
import temperatureLow from '$lib/icons/answers/temperature-low.svg';

export const fever = {
	label: 'Do you have a fever?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: temperatureLow,
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
			image: temperatureHigh,
			medications: {
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Reduces fever effectively',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Reduces fever effectively',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0.5
				},
				aspirin: {
					value: 0.5
				}
			}
		}
	]
};
