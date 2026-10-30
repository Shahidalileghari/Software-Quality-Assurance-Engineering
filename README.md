# Software Testing & QA Mastery

A practical, engineering-focused curriculum for learning software testing and quality assurance from fundamentals to advanced automation and production QA workflows.

## What you'll learn
- Testing principles, terminology, levels, types, and the test pyramid
- Requirements analysis, risk-based testing, test plans, test cases, and defect reports
- Unit, integration, API, contract, and end-to-end testing
- JavaScript/TypeScript test automation with Vitest and Playwright
- API testing with Supertest and Postman/Newman
- Test doubles: mocks, stubs, spies, and fixtures
- TDD, BDD, exploratory testing, regression, and smoke testing
- Accessibility, security-testing fundamentals, and performance testing with k6
- CI quality gates, coverage, reporting, and maintainable test architecture

## Technology stack
| Area | Tools |
|---|---|
| Unit and component tests | Vitest |
| API integration tests | Supertest |
| Browser automation | Playwright |
| API exploration | Postman / Newman |
| Performance testing | k6 |
| Runtime | Node.js 22+ |
| CI | GitHub Actions |
| Formatting / linting | ESLint |

The curriculum is tool-aware but not tool-dependent: testing concepts transfer to Java, Python, .NET, and other ecosystems.

## Quick start
Prerequisites: Node.js 22+ and npm.

```bash
npm install
npm test
npm run test:coverage
npm run test:e2e
```

The demo application is intentionally small so the tests and QA practices remain the focus.

## Repository map
```text
software-testing-qa-mastery/
├── 00-foundations/
├── 01-test-planning/
├── 02-manual-testing/
├── 03-unit-testing/
├── 04-integration-testing/
├── 05-api-testing/
├── 06-contract-testing/
├── 07-e2e-testing/
├── 08-test-doubles/
├── 09-tdd-bdd/
├── 10-performance-testing/
├── 11-security-accessibility/
├── 12-ci-quality-gates/
├── 13-advanced-strategy/
├── demo-app/
├── tests/
├── playwright/
├── performance/
├── test-artifacts/
├── projects/
├── docs/
└── .github/workflows/
```

## Learning path
Follow the numbered modules in order. For each module:
1. Read the concept.
2. Run the example or inspect the test.
3. Complete the exercise without looking at the solution.
4. Record assumptions, edge cases, and risks.
5. Add the test to a CI workflow where appropriate.

## Projects
See [`projects/`](projects/README.md) for progressive portfolio projects:
1. Test case design and defect-tracking pack
2. Unit-tested utility library
3. REST API integration test suite
4. Playwright browser automation suite
5. k6 performance baseline
6. CI quality-gate capstone

## Important testing principles
- A passing test suite does not prove a system is defect-free.
- Tests should verify observable behavior, not private implementation details.
- Test the highest-risk behaviors first.
- Prefer deterministic, isolated, readable tests.
- Coverage is a signal, not a substitute for test quality.
- Never put real credentials, production data, or secrets in test fixtures.

## Validation status
This repository includes runnable examples and automation configuration. The ZIP archive was integrity-checked after creation. Runtime execution of npm dependencies, browser tests, and k6 was not performed in the generation environment; install dependencies and run the commands locally or in CI before relying on results.

