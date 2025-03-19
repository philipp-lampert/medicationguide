import stomach from '$lib/icons/answers/stomach.svg';
import stomachPain from '$lib/icons/answers/stomach-pain.svg';

export const giRiskFactors = {
	label: 'Do you have heartburn or stomach problems?',
	multipleChoice: false,
	answers: [
		{
			label: 'No',
			image: stomach,
			medications: {
				ibuprofen: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
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
				paracetamol: {
					value: 1,
					explanation: {
						short: 'Safe for stomach',
						long: '',
						sources: [
							{
								label: 'González-Pérez & García Rodríguez, 2006',
								url: 'https://doi.org/10.1111/j.1742-7843.2006.pto_248.x'
							}
						]
					}
				},
				naproxen: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
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
						short: 'Can cause stomach ulcers',
						long: '',
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
				ibuprofen: {
					value: 0,
					explanation: {
						short: 'May further damage stomach',
						long: '',
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
				paracetamol: {
					value: 0.5,
					explanation: {
						short: 'Can cause stomach ulcers',
						long: '',
						sources: [
							{
								label: 'González-Pérez & García Rodríguez, 2006',
								url: 'https://doi.org/10.1111/j.1742-7843.2006.pto_248.x'
							}
						]
					}
				},
				naproxen: {
					value: 0,
					explanation: {
						short: 'May further damage stomach',
						long: '',
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
						short: 'May further damage stomach',
						long: '',
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
