import kidney from '$lib/icons/answers/kidney.svg';
import heart from '$lib/icons/answers/heart.svg';
import liver from '$lib/icons/answers/liver.svg';
import lung from '$lib/icons/answers/lung.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const comorbidities = {
	label: 'Do you suffer from any of the below?',
	multipleChoice: true,
	answers: [
		{
			label: 'Kidney disease',
			image: kidney,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [
							{
								label: 'Baker & Perazella, 2020',
								url: 'https://journals.lww.com/kidney360/fulltext/2020/11000/can_nsaids_be_used_safely_for_analgesia_in.3.aspx'
							},
							{
								label: 'Tsai et al., 2014',
								url: 'https://onlinelibrary.wiley.com/doi/10.1111/dme.12610'
							}
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safest option in kidney disease',
						long: '',
						sources: [
							{
								label: 'Alchin et al., 2022',
								url: 'https://www.tandfonline.com/doi/full/10.1080/03007995.2022.2049551'
							},
							{
								label: 'Koppert et al., 2006',
								url: 'https://journals.lww.com/anesthesia-analgesia/fulltext/2006/11000/the_effects_of_paracetamol_and_parecoxib_on_kidney.18.aspx'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [
							{
								label: 'Baker & Perazella, 2020',
								url: 'https://journals.lww.com/kidney360/fulltext/2020/11000/can_nsaids_be_used_safely_for_analgesia_in.3.aspx'
							},
							{
								label: 'Tsai et al., 2014',
								url: 'https://onlinelibrary.wiley.com/doi/10.1111/dme.12610'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: '',
						sources: [
							{
								label: 'Baker & Perazella, 2020',
								url: 'https://journals.lww.com/kidney360/fulltext/2020/11000/can_nsaids_be_used_safely_for_analgesia_in.3.aspx'
							},
							{
								label: 'Tsai et al., 2014',
								url: 'https://onlinelibrary.wiley.com/doi/10.1111/dme.12610'
							},
							{
								label: 'Oh et al., 2021',
								url: 'https://www.nature.com/articles/s41598-021-86192-4'
							}
						]
					}
				}
			}
		},
		{
			label: 'Heart failure',
			image: heart,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [
							{
								label: 'European Society of Cardiology, 2005',
								url: 'https://academic.oup.com/eurheartj/article/26/11/1115/2888244'
							},
							{
								label: 'American Heart Association, 2005',
								url: 'https://www.sciencedirect.com/science/article/pii/S0735109705019807'
							},
							{
								label: 'Gislason et al., 2009',
								url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/414737'
							}
						]
					}
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Avoid in heart failure',
						long: '',
						sources: [
							{
								label: 'Ren et al., 2024',
								url: 'https://academic.oup.com/eurheartj/article/45/Supplement_1/ehae666.1226/7837786'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [
							{
								label: 'European Society of Cardiology, 2005',
								url: 'https://academic.oup.com/eurheartj/article/26/11/1115/2888244'
							},
							{
								label: 'American Heart Association, 2005',
								url: 'https://www.sciencedirect.com/science/article/pii/S0735109705019807'
							},
							{
								label: 'Gislason et al., 2009',
								url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/414737'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: '',
						sources: [
							{
								label: 'Massie, 2005',
								url: 'https://www.sciencedirect.com/science/article/pii/S0735109705015160'
							},
							{
								label: 'Masoudi, 2005',
								url: 'https://www.sciencedirect.com/science/article/pii/S0735109705015214'
							}
						]
					}
				}
			}
		},
		{
			label: 'Liver disease',
			image: liver,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [
							{
								label: 'Chandok & Watt, 2010',
								url: 'https://www.mayoclinicproceedings.org/article/S0025-6196(11)60332-7/fulltext'
							}
						]
					}
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Contraindicated in liver failure',
						long: '',
						sources: [
							{
								label: 'Malespin, 2018',
								url: 'https://journals.lww.com/cld/fulltext/2018/09000/risk_of_nonsteroidal_anti_inflammatory_drugs_and.5.aspx'
							},
							{
								label: 'Khalid et al., 2009',
								url: 'https://www.cghjournal.org/article/S1542-3565(09)00375-9/fulltext'
							},
							{
								label: 'Chandok & Watt, 2010',
								url: 'https://www.mayoclinicproceedings.org/article/S0025-6196(11)60332-7/fulltext'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [
							{
								label: 'Chandok & Watt, 2010',
								url: 'https://www.mayoclinicproceedings.org/article/S0025-6196(11)60332-7/fulltext'
							}
						]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'Avoid in liver failure',
						long: '',
						sources: [
							{
								label: 'Elshaer & Lizaola-Mayo, 2024',
								url: 'https://www.mdpi.com/2075-1729/14/12/1701'
							},
							{
								label: 'Shin et al., 2020',
								url: 'https://journals.lww.com/md-journal/fulltext/2020/02280/aspirin_and_the_risk_of_hepatocellular_carcinoma.11.aspx'
							}
						]
					}
				}
			}
		},
		{
			label: 'Asthma',
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
