import lightning from '$lib/icons/answers/lightning.svg';
import time from '$lib/icons/answers/time.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const duration = {
	label: 'Have your symptoms lasted over 2 weeks?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: lightning,
			medications: {
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Quick pain relief',
						long: `${paracetamolAcetaminophen(true)} can begin taking effect in as little as 15 minutes, making it a suitable option for managing acute pain.`,
						sources: [
							{ label: 'Yue et al., 2013', url: 'https://doi.org/10.1016/j.clinthera.2013.07.422' }
						]
					}
				},
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Quick pain relief',
						long: 'Ibuprofen can begin taking effect in as little as 15 minutes, making it a suitable option for managing acute pain',
						sources: [{ label: 'Li et al., 2012', url: 'https://doi.org/10.1177/0091270010389470' }]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Slightly slower pain relief',
						long: 'While Naproxen is effective at reducing pain, it usually takes longer (around 60 min) to have a pain-relieving effect than comparable analgesics like ibuprofen. This may not be ideal when quick pain relief is desired.',
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
						short: 'Quick pain relief',
						long: 'Aspirin can begin taking effect in as little as 15 minutes, making it a suitable option for managing acute pain.',
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
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Lower risk of long-term side effects',
						long: `While considered safer than other pain relievers, chronic ${paracetamolAcetaminophen()} use can still lead to significant adverse effects. Research shows higher doses are associated with increased risk of gastrointestinal bleeding and modest elevation in blood pressure. Additionally, ${paracetamolAcetaminophen()} lacks anti-inflammatory properties, making it less effective for chronic inflammatory conditions. However, when kept within recommended dosage limits and providing clear symptomatic relief, ${paracetamolAcetaminophen()} may still be considered the "least-worst" option for long-term pain management, given that alternatives are often associated with more severe side effects.`,
						sources: [
							{ label: 'McCrae et al., 2018', url: 'https://doi.org/10.1111/bcp.13656' },
							{ label: 'Ho et al., 2018', url: 'https://doi.org/10.2147/JPR.S168188' }
						]
					}
				},
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Higher risk of long-term side effects',
						long: 'Ibuprofen requires caution for long-term pain management. While effective for pain relief, extended use carries significant risks, particularly gastrointestinal complications including stomach ulcers and bleeding. The risk increases with duration of use, higher doses, and in patients with certain conditions like cardiovascular disease, kidney problems, or asthma. Research shows that prolonged use may also slightly raise blood pressure and impact renal function.',
						sources: [
							{ label: 'Nissen et al., 2016', url: 'https://doi.org/10.1056/NEJMoa1611593' },
							{ label: 'Ho et al., 2018', url: 'https://doi.org/10.2147/JPR.S168188' }
						]
					}
				},

				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Longer duration of effect',
						long: 'Naproxen requires caution for long-term pain management. While its longer duration of effect (11-20 hours) compared to other analgesics may benefit patients requiring long-term pain relief, its extended use carries significant risks, particularly gastrointestinal complications including stomach ulcers and bleeding. The risk increases with duration of use, higher doses, and in patients with certain conditions like cardiovascular disease, kidney problems, or asthma. Research shows that prolonged use may also slightly raise blood pressure and impact renal function.',
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
						long: 'Long-term use of aspirin, even at a low dose, carries the highest risk of gastrointestinal and intracranial bleeding, with effects lasting up to 7 days. Given that other options with fewer adverse events exist, aspirin is not recommended for long-term use.',
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
