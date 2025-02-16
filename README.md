# Medication Guide

An open-source, free-to-use, interactive tool assisting you in choosing the appropriate over-the-counter medication based on your individual symptoms and risks.

## How it works

The recommendation algorithm uses a scoring system defined in the [questions.ts](src/routes/interactive/questions.ts) file. Each answer and medication is assigned a value that reflects its impact: A score of `0` generally suggests the medication may be harmful or ineffective, `0.5` indicates a neutral effect, and `1` signifies that it is both effective and safe. Based on the user's responses, the algorithm calculates a total score and recommends the medication with the highest overall rating.

## How to contribute

We welcome contributions to this project! You can:

- Add new questions, answers, and medications
- Improve the design and user experience
- Help us fix bugs and improve functionality

If you'd like to support the project with a small donation, you can do so on our [donation page](https://medicationguide.org/donate).
