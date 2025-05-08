# Medication Guide

An open-source web application providing personalized, evidence-based benefit-risk assessments for OTC pain medication selection.

## How it works

<em>Medication Guide</em> uses a weighted scoring algorithm that balances therapeutic benefits against potential risks for each of the four most widely used systemic OTC analgesics: paracetamol, ibuprofen, naproxen, and aspirin (acetylsalicylic acid). Diclofenac was excluded due to its prescription-only status for systemic use in most countries.

To generate personalized recommendations, users complete a [questionnaire](src/lib/questions) assessing symptoms, comorbidities, comedications and demographic information relevant to analgesic selection. Each response contributes to the suitability score of each medication using the following scale:

- `0%`: Contraindicated / Not Effective
- `50%`: Limited Benefit / Use with Caution
- `100%`: Recommended

> A continuous scale was deemed unsuitable due to the inherent difficulty in establishing a clinically validated, precise weighting system to compare how disparate factors should incrementally adjust an analgesic's suitability score.

After completing the questionnaire, the individual scores for each medication are averaged to calculate overall percentage matches, reflecting each medication’s appropriateness. They are presented to the user alongside detailed explanations and scientific references for how each response affected the results.

## Who is behind the project?

The project was created by [Philipp Lampert](https://www.researchgate.net/profile/Philipp-Lampert) in collaboration with the Institute of Clinical Pharmacology and Toxicology at the Charité University Hospital in Berlin, Germany. Senior doctors from Belgium's Institut Jules Bordet and Mexico's Hospital General de Querétaro reviewed and contributed to the project. Feel free to reach out by sending an email to [info@medicationguide.org](mailto:info@medicationguide.org).

If you'd like to support the project with a small donation, you can do so on our [donation page](https://medicationguide.org/donate).
