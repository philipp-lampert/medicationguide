# Medication Guide

An open-source tool providing free and personalized OTC pain medication recommendations based on symptoms and risk factors.

## How it works

The recommendation algorithm uses a scoring system defined in the [questions](src/lib/questions) folder. Each response is associated with a numeric value for each of the four drugs, contributing to a cumulative score that determines each medication’s suitability: A score of `0` indicates the medication may be harmful or ineffective, `0.5` indicates a neutral effect, and `1` that it is both effective and safe. Based on the user's responses, the algorithm calculates a total score and recommends the medication with the highest suitability score. This score is presented as a percentage match on the results page, accompanied by detailed explanations and scientific references, accessible through individual modal windows for each response.

## How to contribute

We welcome contributions to this project! You can:

- Add new questions, answers, and medications
- Improve the design and user experience
- Help us fix bugs and improve functionality

If you'd like to support the project with a small donation, you can do so on our [donation page](https://medicationguide.org/donate).
