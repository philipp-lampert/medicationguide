import pregnantIcon from '$lib/icons/answers/pregnant.svg';
import person from '$lib/icons/answers/person.svg';

export const pregnant = {
	label: 'Are you pregnant in the 3rd trimester?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: person,
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
			image: pregnantIcon,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in 3rd trimester',
						long: 'NSAIDs including ibuprofen are contraindicated during the third trimester as they may cause premature closure of the ductus arteriosus and other fetal complications.',
						sources: [
							{
								label: 'FDA guidance on NSAID use in pregnancy',
								url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic'
							}
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe in pregnancy',
						long: 'Paracetamol (acetaminophen) is considered the first-line analgesic for pregnant women throughout all trimesters when used at recommended doses.',
						sources: [
							{
								label: 'NIH guidance on acetaminophen in pregnancy',
								url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6492207/'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in 3rd trimester',
						long: 'NSAIDs including naproxen are contraindicated during the third trimester due to risk of premature ductal closure and potential fetal renal complications.',
						sources: [
							{
								label: 'FDA guidance on NSAID use in pregnancy',
								url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in 3rd trimester',
						long: 'Aspirin is contraindicated during the third trimester as it may increase the risk of maternal and fetal bleeding, and may cause premature closure of the ductus arteriosus.',
						sources: [
							{
								label: 'ACOG recommendations on aspirin in pregnancy',
								url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/07/low-dose-aspirin-use-during-pregnancy'
							}
						]
					}
				}
			}
		}
	]
};
