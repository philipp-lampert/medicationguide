import lung from '$lib/icons/answers/lung.svg';
import lungFaded from '$lib/icons/answers/lung-faded.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const asthma = {
	label: 'Do you have asthma?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: lungFaded,
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
			image: lung,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: 'Ibuprofen poses a significant risk for patients with asthma as it can trigger bronchospasm and severe asthma attacks. Like other NSAIDs, it inhibits cyclooxygenase (COX) enzymes, altering inflammatory pathways and increasing production of bronchoconstrictive leukotrienes. Research shows that up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with reactions ranging from mild wheezing to severe bronchospasm. For this reason, ibuprofen is contraindicated in patients with known NSAID-sensitive asthma or history of asthma symptoms after taking NSAIDs. All patients with asthma should consult their healthcare provider before using ibuprofen.',
						sources: [
							{
								label: 'Levy & Volans, 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200124110-00004'
							},
							{
								label: 'Sheehan et al., 2016',
								url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1515990'
							},
							{ label: 'Jenkins et al., 2004', url: 'https://www.bmj.com/content/328/7437/434' }
						]
					}
				},
				paracetamol: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: `The safety of ${paracetamolAcetaminophen()} in asthma remains a subject of debate in current research. While it has traditionally been considered safer than NSAIDs due to its different mechanism of action, recent studies have raised concerns about possible associations between paracetamol use and increased risk of asthma exacerbations. Some research suggests up to 60% of asthmatic patients may show sensitivity to analgesics, including ${paracetamolAcetaminophen()}. Due to these conflicting findings, patients with asthma should consult their healthcare provider before using any pain medication, particularly if they have a history of drug-induced respiratory symptoms.`,
						sources: [
							{
								label: 'Levy & Volans, 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200124110-00004'
							},
							{
								label: 'Sheehan et al., 2016',
								url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1515990'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: 'Naproxen poses a significant risk for patients with asthma as it can trigger bronchospasm and severe asthma attacks. Like other NSAIDs, it inhibits cyclooxygenase (COX) enzymes, altering inflammatory pathways and increasing production of bronchoconstrictive leukotrienes. Research shows that up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with reactions ranging from mild wheezing to severe bronchospasm. For this reason, naproxen is contraindicated in patients with known NSAID-sensitive asthma or history of asthma symptoms after taking NSAIDs. All patients with asthma should consult their healthcare provider before using naproxen.',
						sources: [
							{
								label: 'Levy & Volans, 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200124110-00004'
							},
							{ label: 'Jenkins et al., 2004', url: 'https://www.bmj.com/content/328/7437/434' }
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: 'Aspirin presents a significant risk for patients with asthma as it can trigger bronchospasm and potentially severe asthma attacks in susceptible individuals. As an NSAID, it inhibits cyclooxygenase (COX) enzymes, altering inflammatory pathways and increasing production of bronchoconstrictive leukotrienes. Up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with aspirin being particularly associated with aspirin-exacerbated respiratory disease (AERD). Reactions can range from mild wheezing to severe, life-threatening bronchospasm, making aspirin contraindicated in patients with known NSAID-sensitive asthma. All patients with asthma should consult their healthcare provider before using aspirin.',
						sources: [
							{
								label: 'Levy & Volans, 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200124110-00004'
							},
							{
								label: 'Morales et al., 2015',
								url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/all.12629'
							},
							{ label: 'Jenkins et al., 2004', url: 'https://www.bmj.com/content/328/7437/434' }
						]
					}
				}
			}
		}
	]
};
