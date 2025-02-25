import kidney from '$lib/icons/answers/kidney.svg';
import heart from '$lib/icons/answers/heart.svg';
import liver from '$lib/icons/answers/liver.svg';

export const comorbidities = {
	label: 'Do you suffer from any of the below?',
	type: 'multipleChoice',
	multipleChoice: true,
	answers: [
		{
			label: 'Kidney disease',
			image: kidney,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Avoid in kidney disease',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Heart failure',
			image: heart,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Avoid in heart failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		},
		{
			label: 'Liver disease',
			image: liver,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Contraindicated in liver failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [{ label: '', url: '' }]
					}
				}
			}
		}
	]
};
