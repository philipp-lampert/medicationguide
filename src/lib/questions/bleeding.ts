import bleedingIcon from '$lib/icons/answers/bleeding.svg';
import no from '$lib/icons/answers/no.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const bleeding = {
	label: 'Do you bruise/bleed easily or take anticoagulants?',
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
			image: bleedingIcon,
			medications: {
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'May slightly increase bleeding risk',
						long: `Evidence regarding ${paracetamolAcetaminophen()}'s effect on bleeding risk is mixed. Most studies show no significant increase, making it the preferred analgesic for patients with bleeding disorders or on anticoagulants. While some recent research suggests a slight increase in bleeding risk at therapeutic doses, this effect is substantially weaker than with NSAIDs (e.g., ibuprofen). ${paracetamolAcetaminophen(true)} remains the safest analgesic option for patients with bleeding disorders or hemorrhage history, though healthcare provider consultation is still recommended for those with severe bleeding risk factors.`,
						sources: [
							{
								label: 'Mahé et al., 2012',
								url: 'https://link.springer.com/article/10.2165/00002018-200427050-00004'
							},
							{
								label: 'Paternoster et al., 2021',
								url: 'https://accp1.onlinelibrary.wiley.com/doi/full/10.1002/jcph.2003'
							},
							{
								label: 'Lanas et al., 2003',
								url: 'https://journals.lww.com/eurojgh/fulltext/2003/02000/Risk_of_upper_gastrointestinal_bleeding_associated.11.aspx'
							}
						]
					}
				},
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Increases bleeding risk',
						long: 'Ibuprofen significantly increases bleeding risk by impairing platelet function and prolonging bleeding time. Patients with bleeding disorders, hemorrhage history, or those on anticoagulant therapy face an increased risk for serious bleeding complications.',
						sources: [
							{
								label: 'Olsen et al., 2015',
								url: 'https://jamanetwork.com/journals/jama/fullarticle/2130316'
							},
							{
								label: 'Straube et al., 2009',
								url: 'https://link.springer.com/article/10.1186/1471-230X-9-41'
							},
							{
								label: 'Zapata et al., 2020',
								url: 'https://www.thieme-connect.com/products/ejournals/html/10.1055/s-0040-1710592'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Increases bleeding risk',
						long: 'Naproxen significantly increases bleeding risk by impairing platelet function and prolonging bleeding time. In addition, its longer half-life (11-20 hours) results in sustained effects, potentially increasing bleeding risk compared to shorter-acting NSAIDs like ibuprofen. Patients with bleeding disorders, hemorrhage history, or those on anticoagulant therapy face an increased risk for serious bleeding complications.',
						sources: [
							{
								label: 'Olsen et al., 2015',
								url: 'https://jamanetwork.com/journals/jama/fullarticle/2130316'
							},
							{
								label: 'Straube et al., 2009',
								url: 'https://link.springer.com/article/10.1186/1471-230X-9-41'
							},
							{
								label: 'Zapata et al., 2020',
								url: 'https://www.thieme-connect.com/products/ejournals/html/10.1055/s-0040-1710592'
							},
							{
								label: 'Paternoster et al., 2021',
								url: 'https://accp1.onlinelibrary.wiley.com/doi/full/10.1002/jcph.2003'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'High risk of serious bleeding',
						long: "Aspirin carries the highest bleeding risk among OTC analgesics due to its irreversible effect on platelet function, which persists for the platelets' entire 7–10-day lifespan. This makes aspirin particularly dangerous for patients with bleeding disorders, hemorrhage history, or those on anticoagulants, with clinical evidence demonstrating substantially increased rates. Aspirin is therefore strictly contraindicated in patients with a high bleeding risk.",
						sources: [
							{
								label: 'Olsen et al., 2015',
								url: 'https://jamanetwork.com/journals/jama/fullarticle/2130316'
							},
							{
								label: 'Straube et al., 2009',
								url: 'https://link.springer.com/article/10.1186/1471-230X-9-41'
							},
							{
								label: 'Zapata et al., 2020',
								url: 'https://www.thieme-connect.com/products/ejournals/html/10.1055/s-0040-1710592'
							},
							{
								label: 'Paternoster et al., 2021',
								url: 'https://accp1.onlinelibrary.wiley.com/doi/full/10.1002/jcph.2003'
							}
						]
					}
				}
			}
		}
	]
};
