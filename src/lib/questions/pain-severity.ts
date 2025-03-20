import mild from '$lib/icons/answers/mild.svg';
import moderate from '$lib/icons/answers/moderate.svg';
import severe from '$lib/icons/answers/severe.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const painSeverity = {
	label: 'How strong is your pain?',
	multipleChoice: false,
	answers: [
		{
			label: 'Mild',
			image: mild,
			medications: {
				paracetamol: {
					value: 1
				},
				ibuprofen: {
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
			label: 'Moderate',
			image: moderate,
			medications: {
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Slightly weaker pain relief',
						long: `Large clinical studies have shown ${paracetamolAcetaminophen()} to be less effective than ibuprofen, particularly for conditions with inflammatory components. However, due to its favorable safety profile and fewer gastrointestinal side effects, it is still a suitable option for moderate pain.`,
						sources: [{ label: 'Moore et al., 2015', url: 'https://doi.org/10.1002/ejp.649' }]
					}
				},
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Effective pain relief',
						long: `Large clinical trials have demonstrated ibuprofen's superior analgesic efficacy compared to ${paracetamolAcetaminophen()}, particularly for inflammatory conditions due to its direct anti-inflammatory action. For moderate pain, ibuprofen likely provides sufficient pain relief.`,
						sources: [{ label: 'Moore et al., 2015', url: 'https://doi.org/10.1002/ejp.649' }]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Likely insufficient for severe pain',
						long: 'Some studies suggest naproxen may provide slightly more effective pain relief than ibuprofen, though evidence remains inconclusive. Its longer half-life offers more sustained effects with less frequent dosing. For moderate pain, naproxen likely provides sufficient pain relief.',
						sources: [
							{
								label: 'The Manchester General Practicioner Group, 1984',
								url: 'https://doi.org/10.1185/03007998409109557'
							},
							{
								label: 'Schiff & Minic, 2004',
								url: 'https://www.jrheum.org/content/31/7/1373' // No DOI available
							}
						]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Slightly weaker pain relief',
						long: 'Clinical studies have shown aspirin to be less effective for pain relief than ibuprofen, though evidence remains inconclusive. Aspirin also carries a higher risk of gastrointestinal side effects and bleeding complications than other analgesics. However, sufficient pain relief can likely be reached for moderate pain.',
						sources: [
							{ label: 'Autret et al., 1997', url: 'https://doi.org/10.1007/s002280050215' },
							{
								label: 'Cooper et al., 1977',
								url: 'https://pubmed.ncbi.nlm.nih.gov/269932/' // No DOI available
							}
						]
					}
				}
			}
		},
		{
			label: 'Severe',
			image: severe,
			medications: {
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Insufficient for severe pain',
						long: `Large clinical studies have shown ${paracetamolAcetaminophen()} to be less effective than ibuprofen, particularly for conditions with inflammatory components. Despite its favorable safety profile and fewer gastrointestinal side effects, its limited analgesic potency makes it inadequate for managing severe pain, which typically indicates conditions requiring medical evaluation and stronger analgesic interventions.`,
						sources: [{ label: 'Moore et al., 2015', url: 'https://doi.org/10.1002/ejp.649' }]
					}
				},
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Likely insufficient for severe pain',
						long: `Large clinical trials have demonstrated ibuprofen's superior analgesic efficacy compared to ${paracetamolAcetaminophen()}, particularly for inflammatory conditions due to its direct anti-inflammatory action. However, ibuprofen reaches a therapeutic ceiling at maximum doses that is often insufficient for severe pain, which typically indicates conditions requiring medical evaluation and stronger analgesic interventions.`,
						sources: [{ label: 'Moore et al., 2015', url: 'https://doi.org/10.1002/ejp.649' }]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Likely insufficient for severe pain',
						long: 'Some studies suggest naproxen may provide slightly more effective pain relief than ibuprofen, though evidence remains inconclusive. Its longer half-life offers more sustained effects with less frequent dosing. Despite these potential advantages, naproxen still reaches a therapeutic ceiling at maximum doses that is often insufficient for severe pain, which typically indicates conditions requiring medical evaluation and stronger analgesic interventions.',
						sources: [
							{
								label: 'The Manchester General Practicioner Group, 1984',
								url: 'https://doi.org/10.1185/03007998409109557'
							},
							{
								label: 'Schiff & Minic, 2004',
								url: 'https://www.jrheum.org/content/31/7/1373' // No DOI available
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Insufficient for severe pain',
						long: 'Clinical studies have shown aspirin to be less effective for pain relief than ibuprofen, though evidence remains inconclusive. Aspirin also carries a higher risk of gastrointestinal side effects and bleeding complications than other analgesics, especially at doses required to treat severe pain. Furthermore, aspirin reaches a therapeutic ceiling at maximum doses that is often insufficient for severe pain, which typically indicates conditions requiring medical evaluation and stronger analgesic interventions.',
						sources: [
							{ label: 'Autret et al., 1997', url: 'https://doi.org/10.1007/s002280050215' },
							{
								label: 'Cooper et al., 1977',
								url: 'https://pubmed.ncbi.nlm.nih.gov/269932/' // No DOI available
							}
						]
					}
				}
			}
		}
	]
};
