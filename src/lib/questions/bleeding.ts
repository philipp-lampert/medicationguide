import bleedingIcon from '$lib/icons/answers/bleeding.svg';
import noBleeding from '$lib/icons/answers/no-bleeding.svg';

export const bleeding = {
	label: 'Do you bruise easily or have prolonged bleeding?',
	type: 'singleChoice',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: noBleeding,
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
			image: bleedingIcon,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Increases bleeding risk',
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
						short: 'Increases bleeding risk',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'High risk of serious bleeding',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
