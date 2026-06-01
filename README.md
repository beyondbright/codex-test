# GitHub Workflow Demo

This repository is a zero-dependency Node.js demo for exercising a Codex and
GitHub workflow.

## Local verification

```bash
node --test
node scripts/build.mjs
node scripts/deploy-dry-run.mjs
```

## GitHub workflow

- Pull requests run `.github/workflows/ci.yml`.
- Pushes to `main` and manual dispatches run
  `.github/workflows/deploy-dry-run.yml`.
- The deployment workflow only performs a dry run. It does not contact a
  production environment.
