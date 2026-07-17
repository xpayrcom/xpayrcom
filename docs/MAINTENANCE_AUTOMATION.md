# XPayr GitHub Maintenance Automation

## Purpose

The automation keeps XPayr repositories tested, current, and useful without manufacturing contribution activity. A scheduled run is activity; a commit is created only when repository content or dependency state has genuinely changed.

## Daily layers

1. Every public XPayr repository calls the reusable repository health workflow.
2. Dependabot checks GitHub Actions and the package ecosystems present in each repository.
3. The profile repository refreshes its public repository catalog from GitHub metadata.
4. The catalog workflow commits only when repository names, descriptions, links, or grouping output changes.

## Repository health checks

- tracked secret-file name detection
- unresolved merge-marker detection
- JSON and shell syntax validation
- PHP and XML syntax validation when those files exist
- Node.js install, production vulnerability audit, and tests when `package.json` exists
- Composer validation, audit, and tests for locked Composer projects

## Commit policy

- no empty commits
- no timestamp-only changes
- no fake changelog entries
- no automatic package releases
- no production deployment or mainnet mutation
- no secret values in workflow logs, artifacts, commits, or generated documentation

## Failure handling

A failed daily run remains visible in GitHub Actions. Dependency changes arrive as reviewable pull requests. Package publishing, production deployment, wallet operations, and Arc Mainnet activation remain separate manual release gates.

