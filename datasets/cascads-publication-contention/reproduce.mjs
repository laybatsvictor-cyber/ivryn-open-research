// Reproduce from the Cascads repository root:
// node scripts/run-publication-proof-study.mjs
// This public copy records the exact entrypoint used for the dated study.
// The benchmark imports lib/publication-claims.js and starts independent Node.js processes
// that contend for one item/platform key in an isolated temporary ledger.
// Parameters: CASCADS_STUDY_ROUNDS (1..100), CASCADS_STUDY_WORKERS (2..20).
