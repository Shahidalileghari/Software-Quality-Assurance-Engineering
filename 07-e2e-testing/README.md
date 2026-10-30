# 07 — End-to-end testing

E2E tests exercise a complete user-visible flow across the system. They are powerful but slower and more failure-prone than focused lower-level tests.

Use stable selectors, isolated test data, explicit waits for observable conditions, and traces/screenshots on failure. Avoid arbitrary sleeps and dependence on production data.

Run: `npm run test:e2e`.
