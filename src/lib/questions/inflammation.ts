import inflammationIcon from '$lib/icons/answers/inflammation.svg';
import no from '$lib/icons/answers/no.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const inflammation = {
	label: 'Do you have joint pain or inflammation?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: no,
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
			image: inflammationIcon,
			medications: {
				paracetamol: {
					value: 0,
					explanation: {
						short: 'Not anti-inflammatory',
						long: `${paracetamolAcetaminophen(true)} provides only minimal anti-inflammatory benefit due to its weak peripheral action. While effective for pain relief through central nervous system mechanisms, it does not significantly reduce tissue inflammation, swelling, or redness. This makes ${paracetamolAcetaminophen()} ineffective for conditions where inflammation is the primary symptom.`,
						sources: [
							{ label: 'Graham et al., 2013', url: 'https://doi.org/10.1007/s10787-013-0172-x' }
						]
					}
				},
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'Anti-inflammatory',
						long: 'Ibuprofen is anti-inflammatory as it inhibits the production of pro-inflammatory prostaglandins. This mechanism reduces swelling, redness, and pain at the inflammation site. It works directly at the site of inflammation, making it appropriate for conditions like joint pain, muscle injuries, and inflammatory disorders. Its rapid onset and good tissue penetration provide efficient symptom control when used appropriately.',
						sources: [
							{ label: 'Schiff & Minic, 2004', url: 'https://www.jrheum.org/content/31/7/1373' } // DOI not found
						]
					}
				},
				naproxen: {
					value: 1,
					explanation: {
						short: 'Anti-inflammatory',
						long: 'Naproxen is anti-inflammatory as it inhibits the production of pro-inflammatory prostaglandins. This mechanism reduces swelling, redness, and pain at the inflammation site. It works directly at the site of inflammation, making it appropriate for conditions like joint pain, muscle injuries, and inflammatory disorders. Naproxen’s longer half-life (11-20 hours) makes it particularly suitable for persistent inflammatory conditions, with clinical studies demonstrating comparable or superior anti-inflammatory efficacy to ibuprofen.',
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
					value: 1,
					explanation: {
						short: 'Anti-inflammatory',
						long: 'Aspirin is anti-inflammatory as it inhibits the production of pro-inflammatory prostaglandins. This mechanism reduces swelling, redness, and pain at the inflammation site. It works directly at the site of inflammation, making it appropriate for conditions like joint pain, muscle injuries, and inflammatory disorders. Its rapid onset and good tissue penetration provide efficient symptom control when used appropriately.',
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
