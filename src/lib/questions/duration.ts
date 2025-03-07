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
			image: time,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Higher risk of long-term side effects',
						long: '',
						sources: [
							{ label: 'Nissen et al., 2016', url: 'https://doi.org/10.1056/NEJMoa1611593' },
							{ label: 'Ho et al., 2018', url: 'https://doi.org/10.2147/JPR.S168188' }
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Lower risk of long-term side effects',
						long: '',
						sources: [
							{ label: 'McCrae et al., 2018', url: 'https://doi.org/10.1111/bcp.13656' },
							{ label: 'Ho et al., 2018', url: 'https://doi.org/10.2147/JPR.S168188' }
						]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Longer duration of effect',
						long: '',
						sources: [
							{ label: 'Nissen et al., 2016', url: 'https://doi.org/10.1056/NEJMoa1611593' },
							{ label: 'Ho et al., 2018', url: 'https://doi.org/10.2147/JPR.S168188' },
							{ label: 'Segre, 1975', url: 'https://doi.org/10.1002/j.1552-4604.1975.tb01458.x' }
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Higher risk of long-term side effects',
						long: '',
						sources: [
							{ label: 'Derry & Loke, 2000', url: 'https://doi.org/10.1136/bmj.321.7270.1183' },
							{ label: 'Wang et al., 2022', url: 'https://doi.org/10.1007/s40256-022-00537-6' }
						]
					}
				}
			}
		}
	]
};
