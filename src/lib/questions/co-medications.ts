import pills from '$lib/icons/answers/pills.svg';
import bloodPressure from '$lib/icons/answers/blood-pressure.svg';
import depression from '$lib/icons/answers/depression.svg';

export const coMedications = {
	label: 'Do you take any of these medications?',
	type: 'multipleChoice',
	multipleChoice: true,
	answers: [
		{
			label: 'BP medication',
			image: bloodPressure,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'May affect blood pressure',
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
						short: 'May affect blood pressure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'May affect blood pressure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Antidepressants',
			image: depression,
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
		},
		{
			label: 'Steroids',
			image: pills,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 1
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
