# WikiCards trivia facts from Wikidata

A curated, validated set of facts used to generate the daily WikiCards quizzes: 196 countries (capital, continent, currency, official language, population, flag and locator map), 784 places, 619 people, 1,154 films, 258 literary works, 122 events, 120 rivers, 27 peaks, 92 chemical elements, 91 paintings, 99 inventions or discoveries, 50 US states, 46 Olympic Games, 23 FIFA World Cups and 460 championship editions.

- Official page and method: https://playwikicards.com/how-the-quizzes-are-made/
- The quizzes built from it: https://playwikicards.com/trivia-questions/ (English) and https://playwikicards.com/fr/quiz-culture-generale/ (French)
- Collected on 23 October 2026 from the Wikidata SPARQL service and the Wikipedia API.

## Files

| File | Content |
| --- | --- |
| `trivia-facts-2026-10-23.json` | All families. Every entity keeps its Wikidata id and its labels in English, French, Spanish and Portuguese, plus Wikipedia article URLs when they exist. |
| `countries-2026-10-23.csv` | One row per sovereign state: capital or capitals, continent, currency, official language, population and its year, Commons file names of the flag and locator map. |
| `rivers-2026-10-23.csv` | Length in kilometres (preferred-rank value, median when several agree within 12 %). |
| `chemical-elements-2026-10-23.csv` | The 92 natural elements with symbol and atomic number. |

## How the facts were cleaned

- Labels fall back from the language to the multilingual `mul` label, then English. Without it, 36 of the 200 most-read people in our catalogue had no English or no French label.
- Lengths and elevations use preferred-rank values when they exist (the Nile also carries a 2,850 km normal-rank length) and items whose values disagree by more than 12 % are dropped.
- A fact is kept only when it has a single current value: one capital, one author, one director, one winner. Countries with several capitals keep all of them in a separate `caps` field.
- Insular Oceania is merged into Oceania. Discoveries of physical places, chemical elements and celestial bodies are excluded.
- Championship winners of US franchise leagues are named after the current franchise in Wikidata. The quizzes only use editions from 2000 onward.

## Evidence boundaries

- These are Wikidata statements as read on 23 October 2026, not independently verified facts. Wikidata can be wrong or change after that date.
- Populations come from different years, given with each value.
- Capitals of Israel and the State of Palestine have an internationally disputed status. The quizzes never ask them.
- Commons file names point to images under their own licences. No image is included here.

## Licence

The facts come from Wikidata, released under CC0 1.0. This compilation is also released under CC0 1.0.
