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
					value: 1,
					explanation: {
						short: 'Short time to effect',
						long: '',
						sources: [{ label: 'Li et al., 2012', url: 'https://doi.org/10.1177/0091270010389470' }]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Short time to effect',
						long: '',
						sources: [
							{ label: 'Yue et al., 2013', url: 'https://doi.org/10.1016/j.clinthera.2013.07.422' }
						]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Slower time to effect',
						long: '',
						sources: [
							{ label: 'Ong et al., 2007', url: 'https://doi.org/10.3121/cmr.2007.698' },
							{
								label: 'Davies & Anderson, 1997',
								url: 'https://doi.org/10.2165/00003088-199732040-00002'
							},
							{
								label: 'Valentovic, 2007',
								url: 'https://doi.org/10.1016/B978-008055232-3.62246-9'
							}
						]
					}
				},
				aspirin: {
					value: 1,
					explanation: {
						short: 'Short time to effect',
						long: '',
						sources: [
							{
								label: 'Ratchford et al., 1985',
								url: 'https://doi.org/10.1152/japplphysiol.01119.2016'
							},
							{
								label: 'Mejaj et al., 2015',
								url: 'https://doi.org/10.2147/TCRM.S92222'
							}
						]
					}
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
