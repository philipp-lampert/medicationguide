import stomach from '$lib/icons/answers/stomach.svg';
import stomachPain from '$lib/icons/answers/stomach-pain.svg';
import { paracetamolAcetaminophen } from '$lib/functions/paracetamol-acetaminophen';

export const giRiskFactors = {
	label: 'Do you have heartburn or stomach problems?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: stomach,
			medications: {
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Gentle on stomach',
						long: `${paracetamolAcetaminophen(true)} doesn’t affect the stomach lining or increase bleeding risk like NSAIDs (e.g., ibuprofen) do. Research indicates that ${paracetamolAcetaminophen()} used at common doses carries little or no additional risk for gastrointestinal bleeding. However, caution is warranted with higher doses, which have been associated with a increased risk.`,
						sources: [
							{
								label: 'González-Pérez & García Rodríguez, 2006',
								url: 'https://doi.org/10.1111/j.1742-7843.2006.pto_248.x'
							}
						]
					}
				},
				ibuprofen: {
					value: 1,
					explanation: {
						short: 'May affect stomach',
						long: "While ibuprofen slightly increases the risk of gastrointestinal complications by inhibiting protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production, it has a lower risk of causing bleeding than naproxen.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							}
						]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'May damage stomach',
						long: "Naproxen increases the risk of gastrointestinal bleeding, as it inhibits protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production. Naproxen is associated with a higher risk compared to other NSAIDs like ibuprofen.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							}
						]
					}
				},
				aspirin: {
					value: 0.5,
					explanation: {
						short: 'May damage stomach',
						long: "Aspirin increases the risk of gastrointestinal bleeding, as it inhibits protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production, while simultaneously inhibiting blood clotting. It has a higher risk than comparable pain relievers.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							},
							{ label: 'Cryer & Mahaffey, 2014', url: 'https://doi.org/10.2147/JMDH.S54324' }
						]
					}
				}
			}
		},
		{
			label: 'Yes',
			image: stomachPain,
			medications: {
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Gentle on stomach',
						long: `${paracetamolAcetaminophen(true)} is generally considered a safer alternative to NSAIDs (e.g., ibuprofen) for patients with gastrointestinal risk factors like ulcers, as it doesn’t damage the stomach lining or increase bleeding risk. Research indicates that ${paracetamolAcetaminophen()} used at common doses carries little or no additional risk for gastrointestinal bleeding. However, caution is warranted with higher doses, which have been associated with a significantly increased risk.`,
						sources: [
							{
								label: 'González-Pérez & García Rodríguez, 2006',
								url: 'https://doi.org/10.1111/j.1742-7843.2006.pto_248.x'
							}
						]
					}
				},
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'May damage stomach',
						long: "Ibuprofen increases the risk of gastrointestinal bleeding, especially in patients with a history of ulcers or other conditions affecting the stomach lining. This occurs because ibuprofen inhibits protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production. While it generally has a lower risk than naproxen, it still carries a moderate risk of gastrointestinal bleeding, particularly with higher doses or prolonged use.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'Risk of GI bleeding',
						long: "Naproxen increases the risk of gastrointestinal bleeding, especially in patients with a history of peptic ulcer disease or other conditions affecting the stomach lining. This occurs because naproxen inhibits protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production. Naproxen is associated with an even higher risk compared to other NSAIDs like ibuprofen, and should not be used in patients with risk factors.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							}
						]
					}
				},
				aspirin: {
					value: 0,
					explanation: {
						short: 'Risk of GI bleeding',
						long: "Aspirin significantly increases the risk of gastrointestinal bleeding, especially in patients with a history of peptic ulcer disease or other conditions affecting the stomach lining. This occurs because aspirin inhibits protective prostaglandins that maintain the stomach's mucosal barrier and regulate acid production, while simultaneously inhibiting blood clotting. Therefore, aspirin is strictly contraindicated in patients with gastrointestinal risk factors.",
						sources: [
							{
								label: 'Henry et al., 1996',
								url: 'https://doi.org/10.1136/bmj.312.7046.1563'
							},
							{
								label: 'Drini, 2017',
								url: 'https://doi.org/10.18773/austprescr.2017.037'
							},
							{ label: 'Cryer & Mahaffey, 2014', url: 'https://doi.org/10.2147/JMDH.S54324' }
						]
					}
				}
			}
		}
	]
};
