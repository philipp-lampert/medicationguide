import pills from '$lib/icons/answers/pills.svg';
import bloodPressure from '$lib/icons/answers/blood-pressure.svg';
import depression from '$lib/icons/answers/depression.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const coMedications = {
	label: 'Do you take any of these medications?',
	multipleChoice: true,
	answers: [
		{
			label: 'Antihypertensives',
			image: bloodPressure,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'May slightly raise blood pressure',
						long: 'Ibuprofen may cause modest increases in blood pressure by affecting renal function and fluid balance. This effect is generally mild but can be clinically relevant in patients with pre-existing hypertension. The blood pressure elevation is typically more significant with regular use rather than occasional administration. For most patients on antihypertensive therapy, short-term ibuprofen use is unlikely to cause significant blood pressure control issues, but regular monitoring is advisable with continued use.',
						sources: [
							{
								label: 'Wilson & Poulter, 2006',
								url: 'https://journals.lww.com/jhypertension/fulltext/2006/08000/the_effect_of_non_steroidal_anti_inflammatory.2.aspx'
							},
							{
								label: 'Johnson et al., 1994',
								url: 'https://www.acpjournals.org/doi/full/10.7326/0003-4819-121-4-199408150-00011'
							},
							{
								label: 'Snowden & Nelson, 2011',
								url: 'https://journals.lww.com/cardiologyinreview/fulltext/2011/07000/The_Effects_of_Nonsteroidal_Anti_Inflammatory.3.aspx'
							},
							{
								label: 'Rivasi et al., 2022',
								url: 'https://link.springer.com/article/10.1007/s11906-022-01205-5'
							}
						]
					}
				},
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'May slightly raise blood pressure',
						long: `${paracetamolAcetaminophen(true)} has traditionally been considered neutral regarding blood pressure, though recent evidence challenges this assumption. Studies demonstrate that regular use may slightly increase systolic blood pressure similar to NSAIDs, through mechanisms that are not fully understood. This effect appears more relevant with extended use rather than occasional administration.`,
						sources: [
							{
								label: 'Wilson & Poulter, 2006',
								url: 'https://journals.lww.com/jhypertension/fulltext/2006/08000/the_effect_of_non_steroidal_anti_inflammatory.2.aspx'
							},
							{
								label: 'Rivasi et al., 2022',
								url: 'https://link.springer.com/article/10.1007/s11906-022-01205-5'
							},
							{
								label: 'MacIntyre et al., 2022',
								url: 'https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.121.056015'
							}
						]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'May slightly raise blood pressure',
						long: 'Naproxen can elevate blood pressure by affecting kidney function, resulting in sodium retention and increased vascular resistance. This effect is generally mild but can be clinically relevant in patients with pre-existing hypertension. The blood pressure elevation is typically more significant with regular use rather than occasional administration. Naproxen may temporarily reduce the effectiveness of some blood pressure medications. Patients with kidney impairment or advanced age may experience more pronounced blood pressure effects.',
						sources: [
							{
								label: 'Wilson & Poulter, 2006',
								url: 'https://journals.lww.com/jhypertension/fulltext/2006/08000/the_effect_of_non_steroidal_anti_inflammatory.2.aspx'
							},
							{
								label: 'Johnson et al., 1994',
								url: 'https://www.acpjournals.org/doi/full/10.7326/0003-4819-121-4-199408150-00011'
							},
							{
								label: 'Snowden & Nelson, 2011',
								url: 'https://journals.lww.com/cardiologyinreview/fulltext/2011/07000/The_Effects_of_Nonsteroidal_Anti_Inflammatory.3.aspx'
							},
							{
								label: 'Rivasi et al., 2022',
								url: 'https://link.springer.com/article/10.1007/s11906-022-01205-5'
							}
						]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'May slightly raise blood pressure',
						long: 'Aspirin at analgesic doses can affect blood pressure regulation by interfering with kidney function and vascular tone. This effect is generally mild but can be clinically relevant in patients with pre-existing hypertension. The blood pressure elevation is typically more significant with regular use rather than occasional administration. Aspirin may temporarily reduce the effectiveness of some blood pressure medications. For most patients on antihypertensive therapy, short-term aspirin use is unlikely to cause significant blood pressure control issues, but regular monitoring is advisable with continued use.',
						sources: [
							{
								label: 'Li et al., 2024',
								url: 'https://bmccardiovascdisord.biomedcentral.com/articles/10.1186/s12872-024-03737-x'
							},
							{
								label: 'Zanchetti et al., 2002',
								url: 'https://journals.lww.com/jhypertension/abstract/2002/05000/low_dose_aspirin_does_not_interfere_with_the_blood.38.aspx'
							},
							{
								label: 'Lu et al., 2024',
								url: 'https://www.nature.com/articles/s41598-024-82225-w'
							}
						]
					}
				}
			}
		},
		{
			label: 'Antidepressants',
			image: depression,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'Increases bleeding risk with SSRIs',
						long: 'SSRIs (Selective Serotonin Reuptake Inhibitors) are a common type of antidepressant medication. When Ibuprofen is taken alongside an SSRI, the combination can significantly increase your risk of bleeding, particularly in the digestive tract. Research shows that this combination may more than quadruple bleeding risk compared to taking an SSRI alone. This happens because SSRIs reduce platelet aggregation (blood clotting ability), while ibuprofen simultaneously irritates the stomach lining and further impairs clotting. If you require both medications, consult your healthcare provider about monitoring or alternative pain relief options.',
						sources: [
							{
								label: 'Haghbin et al., 2023',
								url: 'https://link.springer.com/article/10.1007/s10620-022-07788-y'
							},
							{
								label: 'Anglin et al., 2014',
								url: 'https://journals.lww.com/ajg/abstract/2014/06000/risk_of_upper_gastrointestinal_bleeding_with.7.aspx'
							},
							{
								label: 'Alam et al., 2022',
								url: 'https://www.nature.com/articles/s41598-022-18654-2'
							}
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe with SSRIs',
						long: `${paracetamolAcetaminophen(true)} maintains a favorable safety profile when used concurrently with SSRI antidepressants. Unlike NSAIDs (Ibuprofen, Naproxen, and Aspirin), ${paracetamolAcetaminophen()} does not significantly affect platelet function or blood clotting mechanisms. While research specifically examining ${paracetamolAcetaminophen()}-SSRI combinations is limited, available clinical evidence suggests these combinations do not substantially increase bleeding risk.`,
						sources: [
							{
								label: 'de Jong et al., 2003',
								url: 'https://bpspubs.onlinelibrary.wiley.com/doi/10.1046/j.0306-5251.2002.01770.x'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Increases bleeding risk with SSRIs',
						long: 'SSRIs (Selective Serotonin Reuptake Inhibitors) are a widely prescribed class of antidepressant medications. Taking Naproxen while on an SSRI can substantially increase your risk of bleeding complications. Clinical studies indicate that this combination may increase bleeding risk more than four times compared to SSRI use alone. Naproxen, like other NSAIDs, reduces protective prostaglandins in your stomach lining while SSRIs independently affect blood clotting mechanisms. This dual effect on bleeding control creates a higher-risk situation. Discuss this interaction with your healthcare provider to determine appropriate monitoring or alternative pain management strategies.',
						sources: [
							{
								label: 'Haghbin et al., 2023',
								url: 'https://link.springer.com/article/10.1007/s10620-022-07788-y'
							},
							{
								label: 'Anglin et al., 2014',
								url: 'https://journals.lww.com/ajg/abstract/2014/06000/risk_of_upper_gastrointestinal_bleeding_with.7.aspx'
							},
							{
								label: 'Alam et al., 2022',
								url: 'https://www.nature.com/articles/s41598-022-18654-2'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Increases bleeding risk with SSRIs',
						long: "SSRIs (Selective Serotonin Reuptake Inhibitors) are commonly prescribed antidepressants that affect serotonin levels in the brain. Combining Aspirin with an SSRI creates a high-risk scenario for bleeding complications. Research demonstrates that this combination can increase bleeding risk more than fourfold compared to taking an SSRI by itself. The mechanism involves aspirin's strong antiplatelet effects combined with the SSRI's separate impact on blood clotting, creating a dangerous synergistic effect. Due to this significantly elevated risk, this combination is generally not recommended. Consult your healthcare provider immediately about safer pain relief alternatives if you are taking an SSRI.",
						sources: [
							{
								label: 'Haghbin et al., 2023',
								url: 'https://link.springer.com/article/10.1007/s10620-022-07788-y'
							},
							{
								label: 'Anglin et al., 2014',
								url: 'https://journals.lww.com/ajg/abstract/2014/06000/risk_of_upper_gastrointestinal_bleeding_with.7.aspx'
							},
							{
								label: 'Alam et al., 2022',
								url: 'https://www.nature.com/articles/s41598-022-18654-2'
							}
						]
					}
				}
			}
		},
		{
			label: 'Steroids',
			image: pills,
			medications: {
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: "Ibuprofen and steroids should not be used taken at the same time due to an up to 12-times higher risk of gastrointestinal ulcer formation and bleeding. This is due to the synergistic effects of ibuprofen reducing protective substances that maintain stomach integrity (prostaglandins), while steroids simultaneously impair the stomach's natural healing mechanisms and increase acid production.",
						sources: [
							{
								label: 'Tseng et al., 2015',
								url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/apt.13298'
							},
							{
								label: 'Reinau et al., 2018',
								url: 'https://link.springer.com/article/10.1007/s40264-018-0645-3'
							},
							{
								label: 'García Rodríguez & Hernández Díaz, 2001',
								url: 'https://arthritis-research.biomedcentral.com/articles/10.1186/ar146'
							}
						]
					}
				},
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe with steroids',
						long: `${paracetamolAcetaminophen(true)} is generally considered safe to use alongside steroids, as it does not significantly increase the risk of gastrointestinal complications. While limited research specifically examines paracetamol-steroid interactions, extensive clinical experience suggests this combination is well-tolerated. ${paracetamolAcetaminophen(true)} has not been shown to induce gastric mucosal damage or hemorrhage when taken as directed, making it the preferred analgesic for patients taking steroids, especially those with existing gastrointestinal pathology or ulceration risk factors.`,
						sources: [
							{
								label: 'García Rodríguez & Hernández Díaz, 2001',
								url: 'https://arthritis-research.biomedcentral.com/articles/10.1186/ar146'
							},
							{
								label: 'Bannwarth, 2005',
								url: 'https://www.tandfonline.com/doi/10.1517/14740338.3.4.269'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: '',
						sources: [
							{
								label: 'Tseng et al., 2015',
								url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/apt.13298'
							},
							{
								label: 'Reinau et al., 2018',
								url: 'https://link.springer.com/article/10.1007/s40264-018-0645-3'
							},
							{
								label: 'García Rodríguez & Hernández Díaz, 2001',
								url: 'https://arthritis-research.biomedcentral.com/articles/10.1186/ar146'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'High ulcer risk with steroids',
						long: '',
						sources: [
							{
								label: 'Tseng et al., 2015',
								url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/apt.13298'
							},
							{
								label: 'Reinau et al., 2018',
								url: 'https://link.springer.com/article/10.1007/s40264-018-0645-3'
							},
							{
								label: 'García Rodríguez & Hernández Díaz, 2001',
								url: 'https://arthritis-research.biomedcentral.com/articles/10.1186/ar146'
							},
							{
								label: 'Rampal et al., 2002',
								url: 'https://journals.sagepub.com/doi/10.1177/147323000203000311?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed'
							}
						]
					}
				}
			}
		}
	]
};
