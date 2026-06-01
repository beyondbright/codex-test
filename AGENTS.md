# Codex GitHub Working Agreement

## Code Changes

- Modify repository files locally.
- Before starting work, run `git fetch origin` and `git status -sb`.
- Commit code with local `git commit`.
- Publish code only with local `git push`.
- Do not use the GitHub App contents API to create or update repository files.

## GitHub App

- Use the GitHub App for pull requests, issues, comments, labels, reviews, and merges.
- Create draft pull requests by default.
- Do not merge a pull request unless the user explicitly asks.
- Do not deploy production unless the user explicitly asks.

## Verification

- Run relevant tests and builds before pushing.
- Inspect CI results after pushing.
- Treat production deployment approval as a separate user action.

