import pregnantIcon from '$lib/icons/answers/pregnant.svg';
import adults from '$lib/icons/answers/adults.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const pregnant = {
	label: 'Are you pregnant in the 3rd trimester?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
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
			label: 'Yes',
			image: pregnantIcon,
			medications: {
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'A safer alternative in pregnancy',
						long: `${paracetamolAcetaminophen(true)} is generally considered the safest analgesic option during all trimesters of pregnancy. Unlike NSAIDs, ${paracetamolAcetaminophen()} does not seem to affect fetal circulation and platelet function, substantially reducing risks of complications. However, recent studies have suggested potential associations between prolonged ${paracetamolAcetaminophen()} exposure and certain aspects of fetal development, though these findings remain preliminary and require further research. ${paracetamolAcetaminophen(true)} should therefore only be used at the lowest effective dose for the shortest duration necessary during pregnancy.`,
						sources: [
							{
								label: 'NHS: Paracetamol in pregnancy',
								url: 'https://www.nhs.uk/medicines/paracetamol-for-adults/pregnancy-breastfeeding-and-fertility-while-taking-paracetamol-for-adults/'
							},
							{
								label: 'Bauer et al., 2021',
								url: 'https://doi.org/10.1038/s41574-021-00553-7'
							},
							{
								label: 'Nilsen et al., 2023',
								url: 'https://doi.org/10.1111/aogs.14557'
							}
						]
					}
				},
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in pregnancy',
						long: 'Ibuprofen is contraindicated during the third trimester of pregnancy according to current guidelines. While recent large studies have found limited evidence of adverse outcomes, the theoretical risks of premature ductal closure (a critical blood vessel in the fetus) and effects on fetal circulation warrant a precautionary approach.',
						sources: [
							{
								label: 'FDA: NSAID use in pregnancy',
								url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic'
							},
							{
								label: 'Dathe et al., 2018',
								url: 'https://doi.org/10.1016/j.reprotox.2018.05.003'
							},
							{
								label: 'Nezvalová-Henriksen et al., 2013',
								url: 'https://doi.org/10.1111/1471-0528.12192'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in pregnancy',
						long: 'Naproxen is contraindicated during the third trimester of pregnancy according to current guidelines. While recent large studies have found limited evidence of adverse outcomes, the theoretical risks of premature ductal closure (a critical blood vessel in the fetus) and effects on fetal circulation warrant a precautionary approach.',
						sources: [
							{
								label: 'FDA: NSAID use in pregnancy',
								url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic'
							},
							{
								label: 'Nezvalová-Henriksen et al., 2013',
								url: 'https://doi.org/10.1111/1471-0528.12192'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in pregnancy',
						long: 'Aspirin is contraindicated during the third trimester of pregnancy due to its significant effects on bleeding risk. Its irreversible antiplatelet action increases the risk of bleeding during delivery and potential fetal complications. Aspirin also poses a risk of premature ductal closure (a critical blood vessel in the fetus) which can lead to heart and lung complications in newborns. While clinical studies are investigating prophylactic benefits of low-dose aspirin in preventing preeclampsia under strict medical supervision, this therapeutic application differs fundamentally from analgesic dosing for pain relief. For pain management, aspirin should be avoided entirely in late pregnancy.',
						sources: [
							{
								label: 'Hastie et al., 2021',
								url: 'https://doi.org/10.1016/j.ajog.2020.07.023'
							},
							{
								label: 'ACOG Committee, 2018',
								url: 'https://doi.org/10.1097/aog.0000000000002708'
							}
						]
					}
				}
			}
		}
	]
};
