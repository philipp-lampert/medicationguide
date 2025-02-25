import { painSeverity } from '$lib/questions/pain-severity';
import { duration } from '$lib/questions/duration';
import { fever } from '$lib/questions/fever';
import { inflammation } from '$lib/questions/inflammation';
import { pregnant } from '$lib/questions/pregnant';
import { comorbidities } from '$lib/questions/comorbidities';
import { coMedications } from '$lib/questions/co-medications';
import { bleeding } from '$lib/questions/bleeding';
import { giRiskFactors } from '$lib/questions/gi-risk-factors';
import { asthma } from '$lib/questions/asthma';
import { age } from '$lib/questions/age';

export const MEDICATIONS = ['ibuprofen', 'paracetamol', 'naproxen', 'aspirin'] as const;
export type Medication = (typeof MEDICATIONS)[number];

export type Explanation = {
	short: string;
	long: string;
	sources: {
		label: string;
		url: string;
	}[];
};

export type ValueExplanation = {
	value: number;
	explanation?: Explanation;
};

export type Answer = {
	label: string;
	image: string;
	medications: Record<Medication, ValueExplanation>;
};

export type Question = {
	label: string;
	multipleChoice: boolean;
	answers: Answer[];
};

export const questions: Question[] = [
	painSeverity,
	duration,
	fever,
	inflammation,
	pregnant,
	comorbidities,
	coMedications,
	bleeding,
	giRiskFactors,
	asthma,
	age
];
