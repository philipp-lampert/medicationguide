import child from '$lib/icons/answers/child.svg';
import adult from '$lib/icons/answers/adult.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const age = {
	label: 'Are you older than 16 years?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: child,
			medications: {
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Safe for children',
						long: `Ibuprofen and ${paracetamolAcetaminophen()} are the first-choice analgesics for treatment of pain and fever in children. Ibuprofen is more effective for treatment of inflammation. However, it is contraindicated in neonates and children with asthma or during varicella. In addition, it poses a risk of dehydration and should therefore not be given during episodes of diarrhea or vomiting.`,
						sources: [
							{
								label: 'de Martino et al., 2017',
								url: 'https://link.springer.com/article/10.1007/s40265-017-0751-z'
							},
							{
								label: 'Poddighe et al., 2019',
								url: 'https://journals.lww.com/pec-online/abstract/2019/06000/ibuprofen_for_pain_control_in_children__new_value.14.aspx'
							},
							{
								label: 'Kanabar, 2017',
								url: 'https://link.springer.com/article/10.1007/s10787-016-0302-3'
							}
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe for children',
						long: `${paracetamolAcetaminophen(true)} is considered a first-choice analgesic for pediatric patients due to its established safety profile. It has historically been preferred over NSAIDs for children, though evidence now supports that Ibuprofen is equally safe when used appropriately in pediatric populations.`,
						sources: [
							{
								label: 'NHS: Paracetamol for children',
								url: 'https://www.nhs.uk/medicines/paracetamol-for-children/about-paracetamol-for-children/'
							},
							{
								label: 'Southey et al., 2009',
								url: 'https://www.tandfonline.com/doi/full/10.1185/03007990903116255'
							}
						]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Missing safety data for children',
						long: 'Naproxen is not recommended in pediatric patients primarily due to limited safety data and lack of approved indications for children, not because of specific toxicity concerns. While paracetamol and ibuprofen have well-established safety profiles in pediatric populations and are considered first-line OTC analgesics for children, naproxen has not been studied as extensively in this age group, resulting in more conservative recommendations against its use in patients under 16 years of age.',
						sources: [
							{
								label: 'Mathiesen & Jørgensen, 2022',
								url: 'https://journals.lww.com/adversedrugreactbull/abstract/2022/12000/safety_and_efficacy_of_naproxen_for_fever_and.1.aspx'
							},
							{
								label: 'Cukiernik et al., 2007',
								url: 'https://journals.sagepub.com/doi/abs/10.1345/aph.1H596'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Not safe for children < 16',
						long: "Aspirin is contraindicated in children under 16 years of age due to its association with Reye's syndrome. This rare but potentially fatal condition affects the brain and liver, typically following viral infections. Epidemiological studies in the 1980s established this connection. The incidence of Reye's syndrome declined dramatically after warnings against pediatric aspirin use were implemented. Alternative analgesics such as paracetamol offer comparable efficacy without this serious risk.",
						sources: [
							{
								label: "NHS: Reye's syndrome",
								url: 'https://www.nhs.uk/conditions/reyes-syndrome/'
							},
							{
								label: 'Glasgow, 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200629120-00003'
							},
							{
								label: 'Chapman & Arnold, 2023',
								url: 'https://www.ncbi.nlm.nih.gov/books/NBK526101/'
							}
						]
					}
				}
			}
		},
		{
			label: 'Yes',
			image: adult,
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
		}
	]
};
