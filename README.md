# IVRYN Open Research

Open, machine-readable research assets published by Victor Laybats and the IVRYN portfolio.

This repository mirrors five versioned datasets that are also available from their official project sites. It exists to make the files easier to inspect, cite, reuse and archive. Every dataset separates authored material from third-party facts and states its evidence limits.

## Datasets

| Dataset | Formats | Official source |
| --- | --- | --- |
| [IVRYN portfolio web transparency](datasets/ivryn-portfolio-web-transparency/) | CSV, JSON, field definitions, methodology | [ivryn.com](https://ivryn.com/research/portfolio-web-transparency/) |
| [IMRYN systematic execution controls](datasets/imryn-execution-control/) | CSV, JSON, field definitions, methodology | [imryn.com](https://imryn.com/blog/execution-control-checklist/) |
| [Production readiness for n8n and AI workflows](datasets/victor-automation-readiness/) | CSV, JSON, field definitions, methodology | [victorlaybats.com](https://victorlaybats.com/research/automation-readiness/) |
| [Reef calm habit design checklist](datasets/reef-calm-habit-design/) | CSV, JSON, citation metadata | [reeftogether.com](https://reeftogether.com/research/calm-habit-design-checklist/) |
| [Sealed shared photo consent checklist](datasets/sealed-shared-photo-consent/) | CSV, JSON, citation metadata | [sealedreveal.com](https://sealedreveal.com/research/shared-photo-consent-checklist/) |

## Evidence boundaries

- These files are public research and design resources, not proof of commercial, clinical, investment, ranking or AI-citation outcomes.
- A URL or source reference does not imply endorsement by the referenced organization.
- The portfolio transparency dataset is a dated public-web snapshot. Project status can change after its observation date.
- The IMRYN material is a control and evidence register, not investment advice or proof that a live trading system meets every control.
- The Reef and Sealed checklists describe product-design questions. They do not establish behavioral or safety outcomes.

## Verification and citation

The repository-level [`CITATION.cff`](CITATION.cff) provides citation metadata. Dataset-specific citation files and license notices are retained where they were part of the original package.

Verify the mirrored dataset files with:

```bash
sha256sum -c MANIFEST.sha256
```

## License

The original selection, arrangement, field definitions and authored checklist text are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). Third-party names, trademarks, source publications, software, regulatory text and facts remain subject to their own rights. See [`LICENSE`](LICENSE) and the dataset-specific notices.

## Corrections

Open an issue with the dataset name, row or field, the proposed correction and a public source. Corrections are reviewed against the official project version before a new release is created.
