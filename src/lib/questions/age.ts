import child from '$lib/icons/answers/child.svg';
import adults from '$lib/icons/answers/adults.svg';
import elderly from '$lib/icons/answers/elderly.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const age = {
	label: 'How old are you?',
	multipleChoice: false,
	answers: [
		{
			label: '< 12 years',
			image: child,
			medications: {
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe for children',
						long: `${paracetamolAcetaminophen(true)} is considered a first-choice analgesic for children due to its established safety profile. It has historically been preferred over NSAIDs for children, though evidence now supports that ibuprofen is equally safe when used appropriately.`,
						sources: [
							{
								label: `NHS: ${paracetamolAcetaminophen(true)} for children`,
								url: 'https://www.nhs.uk/medicines/paracetamol-for-children/about-paracetamol-for-children/'
							},
							{
								label: 'Southey et al., 2009',
								url: 'https://www.tandfonline.com/doi/full/10.1185/03007990903116255'
							}
						]
					}
				},
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Safe for children',
						long: `Recent studies have shown comparable safety profiles of ibuprofen and ${paracetamolAcetaminophen()} for children, recommending both as first-line medications. While ibuprofen remains more effective for treatment of inflammation, it is contraindicated in neonates and children with asthma or during varicella. In addition, it poses a risk of dehydration and should therefore not be given during episodes of diarrhea or vomiting.`,
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
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Missing safety data for children',
						long: `Naproxen is not recommended for use in children primarily due to limited safety data, not because of specific toxicity concerns. While ${paracetamolAcetaminophen()} and ibuprofen have well-established safety profiles for children, naproxen has not been studied as extensively in this age group, resulting in more conservative recommendations against its use in patients under 12 years of age.`,
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
						short: 'Not safe for children',
						long: `Aspirin is contraindicated in children under 12 years of age due to its association with Reye's syndrome. This rare but potentially fatal condition affects the brain and liver, typically following viral infections. Although the incidence of Reye's syndrome declined dramatically after epidemiological studies in the 1980s established this connection, alternative analgesics such as ${paracetamolAcetaminophen()} or ibuprofen offer comparable efficacy without this serious risk.`,
						sources: [
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
			label: '12 - 80 years',
			image: adults,
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
			label: '> 80 years',
			image: elderly,
			medications: {
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Recommended for older adults',
						long: `${paracetamolAcetaminophen(true)} is recommended as a first-line analgesic for older adults due to its favorable safety profile and minimal gastrointestinal, renal, or cardiovascular side effects. Given that polypharmacy is common in the elderly, ${paracetamolAcetaminophen(true)}’s low risk of drug-drug interactions makes it especially suitable. Unlike NSAIDs (e.g. ibuprofen), it does not increase the risk of gastrointestinal bleeding or exacerbate hypertension and chronic kidney disease, which are prevalent concerns in older patients. However, caution is advised in cases of severe liver impairment or chronic alcohol use, as hepatotoxicity remains a risk at high or cumulative doses.`,
						sources: [
							{
								label: 'The FORTA List 2021',
								url: 'https://doi.org/10.1007/s40266-022-00922-5'
							},
							{
								label: 'Schneider et al., 2021',
								url: 'https://doi.org/10.3389/fphar.2021.686990'
							}
						]
					}
				},
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Not recommended for older adults',
						long: 'Ibuprofen should be avoided in older adults due to its increased risk of gastrointestinal bleeding, renal impairment, and cardiovascular events. With polypharmacy being common among the elderly, the likelihood of adverse drug-drug interactions, especially with anticoagulants or corticosteroids, further limits its safety. Although effective for inflammatory pain, its safety concerns outweigh its benefits in the elderly, especially in patients with pre-existing hypertension, chronic kidney disease, or heart failure.',
						sources: [
							{
								label: 'The FORTA List 2021',
								url: 'https://doi.org/10.1007/s40266-022-00922-5'
							},
							{
								label: 'Schneider et al., 2021',
								url: 'https://doi.org/10.3389/fphar.2021.686990'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Not recommended for older adults',
						long: `Naproxen is not recommended for use in older adults due to its gastrointestinal and renal risks. With polypharmacy being common among the elderly, the likelihood of adverse drug-drug interactions, especially with anticoagulants or corticosteroids, further limits its safety. While it may offer stronger anti-inflammatory effects than ${paracetamolAcetaminophen()}, its longer half-life increases the potential for accumulation and toxicity. Naproxen may also worsen renal function and elevate blood pressure.`,
						sources: [
							{
								label: 'The FORTA List 2021',
								url: 'https://doi.org/10.1007/s40266-022-00922-5'
							},
							{
								label: 'Schneider et al., 2021',
								url: 'https://doi.org/10.3389/fphar.2021.686990'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Not recommended for older adults',
						long: `Aspirin is no longer recommended for analgesic use in older adults. Its use significantly increases the risk of gastrointestinal bleeding and hemorrhagic stroke, particularly in frail or polymorbid elderly patients. With polypharmacy being common among the elderly, the likelihood of adverse drug-drug interactions, especially with anticoagulants or corticosteroids, further limits its safety. While low-dose aspirin may be indicated for prevention of cardiovascular events, its analgesic role is discouraged due to safer and equally effective alternatives such as ${paracetamolAcetaminophen()}.`,
						sources: [
							{
								label: 'The FORTA List 2021',
								url: 'https://doi.org/10.1007/s40266-022-00922-5'
							},
							{
								label: 'Schneider et al., 2021',
								url: 'https://doi.org/10.3389/fphar.2021.686990'
							}
						]
					}
				}
			}
		}
	]
};
