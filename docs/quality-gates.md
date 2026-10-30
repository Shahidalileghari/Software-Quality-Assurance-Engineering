# CI quality gates

A practical pipeline can enforce these gates in order:

1. Install dependencies from the lockfile (`npm ci`).
2. Lint and run static checks.
3. Run fast unit tests.
4. Run integration and API tests.
5. Enforce coverage thresholds as a guardrail, not a vanity metric.
6. Run browser E2E tests against a disposable environment.
7. Publish reports and traces without leaking secrets or personal data.
8. Run performance/security checks on suitable schedules and environments.

Fail the pipeline on deterministic quality failures. Quarantine flaky tests only with an owner, issue, expiry date, and compensating coverage. Never silently ignore failures.
