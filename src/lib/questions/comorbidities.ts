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
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safest option in kidney disease',
						long: `${paracetamolAcetaminophen(true)} is generally considered safe for patients with chronic kidney disease (CKD) and is the preferred analgesic option when pain relief is needed. Unlike NSAIDs (e.g., ibuprofen), ${paracetamolAcetaminophen()} does not significantly affect renal blood flow or glomerular filtration rate, as it has minimal impact on prostaglandin synthesis in the kidneys. However, in advanced CKD, a dose reduction or extended dosing intervals may be necessary.`,
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
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: 'Ibuprofen is contraindicated in patients with chronic kidney disease (CKD) due to its potential to cause acute kidney injury and accelerate disease progression. By inhibiting prostaglandin synthesis, ibuprofen reduces renal blood flow and glomerular filtration rate, effects that are particularly detrimental in kidneys already compromised by chronic disease. In CKD patients, the kidneys rely heavily on prostaglandins to maintain adequate perfusion and function. Disrupting this compensatory mechanism can rapidly worsen renal function, sometimes irreversibly.',
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

				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in kidney disease',
						long: 'Naproxen is contraindicated in patients with chronic kidney disease (CKD) due to its potential to cause acute kidney injury and accelerate disease progression. By inhibiting prostaglandin synthesis, naproxen reduces renal blood flow and glomerular filtration rate, effects that are particularly detrimental in kidneys already compromised by chronic disease. In CKD patients, the kidneys rely heavily on prostaglandins to maintain adequate perfusion and function. Disrupting this compensatory mechanism can rapidly worsen renal function, sometimes irreversibly.',
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
						long: 'Aspirin is contraindicated in patients with chronic kidney disease (CKD) due to its potential to cause acute kidney injury and accelerate disease progression. By inhibiting prostaglandin synthesis, aspirin reduces renal blood flow and glomerular filtration rate, effects that are particularly detrimental in kidneys already compromised by chronic disease. In CKD patients, the kidneys rely heavily on prostaglandins to maintain adequate perfusion and function. Disrupting this compensatory mechanism can rapidly worsen renal function, sometimes irreversibly. While some studies suggest aspirin to be beneficial for CKD patients due to its cardioprotective effects, this is not related to the use of aspirin as a pain reliever.',
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
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Caution in heart failure',
						long: `${paracetamolAcetaminophen(true)} is recommended with caution in heart failure patients as it presents a more favorable safety profile compared to NSAIDs. It has minimal effects on prostaglandin synthesis, resulting in less impact on fluid retention and vascular resistance. While ${paracetamolAcetaminophen()} does not significantly interfere with heart failure medications, recent evidence suggests it may still be associated with increased risk of heart failure exacerbation and rehospitalization. Importantly, studies indicate that ${paracetamolAcetaminophen()} use does not appear to increase mortality in heart failure patients, making it the preferred analgesic option when pain relief is necessary.`,
						sources: [
							{
								label: 'Ren et al., 2024',
								url: 'https://academic.oup.com/eurheartj/article/45/Supplement_1/ehae666.1226/7837786'
							}
						]
					}
				},
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: 'Ibuprofen is contraindicated in patients with heart failure due to its potential to significantly worsen cardiac function when taken in higher doses. Through inhibition of prostaglandin synthesis, it promotes sodium and water retention while simultaneously reducing the effectiveness of some heart failure medications. While low-dose, occasional use does not seem to affect mortality, the potential for adverse cardiovascular effects remains significant enough that current clinical guidelines recommend against using ibuprofen in patients with established heart failure. ',
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
				naproxen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in heart failure',
						long: 'Naproxen is contraindicated in patients with heart failure due to its potential to significantly worsen cardiac function when taken in higher doses. Through inhibition of prostaglandin synthesis, it promotes sodium and water retention while simultaneously reducing the effectiveness of some heart failure medications. While low-dose, occasional use does not seem to affect mortality, the potential for adverse cardiovascular effects remains significant enough that current clinical guidelines recommend against using naproxen in patients with established heart failure.',
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
					value: 0.5,
					explanation: {
						short: 'Caution in heart failure',
						long: "Aspirin should be used with caution in heart failure patients due to its complex risk-benefit profile. Unlike ibuprofen or naproxen, aspirin has less pronounced effects on renal function and fluid retention, particularly at lower doses. However, clinical evidence suggests that aspirin may still increase the frequency of heart failure exacerbations and hospitalizations. While aspirin's impact on major cardiovascular events appears neutral in heart failure populations, it does not demonstrate clear benefit either, even in patients with established coronary artery disease.",
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
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Caution in liver disease',
						long: `${paracetamolAcetaminophen(true)} should be used with caution in patients with liver disease, though fears about its safety are often exaggerated due to a common misconception. While ${paracetamolAcetaminophen()} can cause liver damage when overdosed, research suggests that therapeutic doses are generally safe in patients who already have stable liver disease. Although these patients have reduced capacity to detoxify ${paracetamolAcetaminophen()}'s metabolites, this typically becomes clinically significant only at high doses. Caution is warranted in patients with chronic alcohol use, where enzyme changes combined with depleted protective mechanisms may increase toxicity risk. For most patients with stable liver disease, ${paracetamolAcetaminophen()} at reduced doses remains a safer analgesic option than NSAIDs (e.g., ibuprofen), though medical supervision is recommended.`,
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
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Contraindicated in liver disease',
						long: "Ibuprofen should be avoided in patients with liver disease. While direct hepatotoxicity is uncommon at standard doses, ibuprofen's primary risk stems from its effects on kidney function rather than the liver itself. In cirrhosis, the body relies on prostaglandins to maintain kidney perfusion, which ibuprofen inhibits, potentially triggering rapid renal deterioration. This risk increases with disease severity and is especially concerning in patients with ascites. Additionally, liver disease can lead to higher drug concentrations, while impaired clotting function simultaneously increases bleeding risk. Though patients with mild, stable liver disease may tolerate short courses of ibuprofen, it should be completely avoided in cirrhosis as even brief use can destabilize compensated patients. ",
						sources: [
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
						short: 'Contraindicated in liver disease',
						long: 'Naproxen should be avoided in patients with liver disease. While direct hepatotoxicity is uncommon at standard doses, naproxen’s primary risk stems from its effects on kidney function rather than the liver itself. In cirrhosis, the body relies on prostaglandins to maintain kidney perfusion, which naproxen inhibits, potentially triggering rapid renal deterioration. This risk increases with disease severity and is especially concerning in patients with ascites. Additionally, liver disease can lead to higher drug concentrations, while impaired clotting function simultaneously increases bleeding risk. Though patients with mild, stable liver disease may tolerate short courses of naproxen, it should be completely avoided in cirrhosis as even brief use can destabilize compensated patients.',
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
						short: 'Caution in liver disease',
						long: 'Aspirin should be used with caution in patients with liver disease. While recent research has identified potential hepatoprotective effects including a reduced risk for hepatocellular carcinoma (HCC), these findings have minimal relevance when using aspirin as a short-term pain reliever. Moreover, liver disease can significantly alter drug metabolism and increase bleeding risk due to potential coagulopathy and portal hypertension. For patients with compensated, stable liver disease, low-dose aspirin may be considered for short-term pain relief with appropriate monitoring. However, in advanced cirrhosis, alternative pain management strategies are generally preferred.',
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
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'May trigger asthma attacks',
						long: `The safety of ${paracetamolAcetaminophen()} in asthma remains a subject of debate in current research. While it has traditionally been considered safer than NSAIDs (e.g., ibuprofen) due to its different mechanism of action, recent studies have raised concerns regarding an increased risk of asthma exacerbations. Some research suggests up to 60% of asthmatic patients may show sensitivity to analgesics, including ${paracetamolAcetaminophen()}. Due to these conflicting findings, patients with asthma should consult their healthcare provider before using any pain medication, particularly if they have a history of drug-induced respiratory symptoms.`,
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
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: 'Ibuprofen poses a significant risk for patients with asthma as it can trigger bronchospasm and severe asthma attacks. Like other NSAIDs, it alters inflammatory pathways and increases production of broncho-constrictive leukotrienes. Research shows that up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with reactions ranging from mild wheezing to severe bronchospasm. For this reason, ibuprofen is contraindicated in patients with known NSAID-sensitive asthma.',
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
				naproxen: {
					value: 0,
					explanation: {
						short: 'May trigger asthma attacks',
						long: 'Naproxen poses a significant risk for patients with asthma as it can trigger bronchospasm and severe asthma attacks. Like other NSAIDs, it alters inflammatory pathways and increases production of broncho-constrictive leukotrienes. Research shows that up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with reactions ranging from mild wheezing to severe bronchospasm. For this reason, naproxen is contraindicated in patients with known NSAID-sensitive asthma.',
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
						long: 'Aspirin poses a significant risk for patients with asthma as it can trigger bronchospasm and severe asthma attacks. Like other NSAIDs, it alters inflammatory pathways and increases production of broncho-constrictive leukotrienes. Research shows that up to 60% of asthmatic patients may experience respiratory symptoms following NSAID exposure, with reactions ranging from mild wheezing to severe bronchospasm. Aspirin is particularly dangerous as it can trigger aspirin-exacerbated respiratory disease (AERD), a specific hypersensitivity reaction characterized by more severe respiratory symptoms and potentially life-threatening bronchospasm. For this reason, aspirin is strictly contraindicated in patients with known NSAID-sensitive asthma.',
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
