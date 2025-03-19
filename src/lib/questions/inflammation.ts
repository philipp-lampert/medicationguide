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
						sources: [
							{ label: 'Schiff & Minic, 2004', url: 'https://www.jrheum.org/content/31/7/1373' } // DOI not found
						]
					}
				},
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Not anti-inflammatory',
						long: '',
						sources: [
							{ label: 'Graham et al., 2013', url: 'https://doi.org/10.1007/s10787-013-0172-x' }
						]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Strong anti-inflammatory',
						long: '',
						sources: [
							{ label: 'Schiff & Minic, 2004', url: 'https://www.jrheum.org/content/31/7/1373' }, // DOI not found
							{
								label: 'The Manchester General Practitioner Group, 1983',
								url: 'https://doi.org/10.1185/03007998409109557'
							},
							{ label: 'Segre, 1975', url: 'https://doi.org/10.1002/j.1552-4604.1975.tb01458.x' }
						]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Moderate anti-inflammatory',
						long: '',
						sources: [
							{
								label: 'Amann & Peskar, 2002',
								url: 'https://doi.org/10.1016/S0014-2999(02)01828-9'
							}
						]
					}
				}
			}
		}
	]
};
