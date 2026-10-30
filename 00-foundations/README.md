# 00 — Testing foundations

## Core idea
Software testing is a disciplined way to gather evidence about product quality and risk. Testing can reveal defects; it cannot prove the absence of all defects.

## Essential distinctions
- Verification: are we building the product right?
- Validation: are we building the right product?
- Error: a human action or decision that may introduce a problem.
- Defect: a flaw in a work product.
- Failure: observable incorrect behavior during execution.

## Test levels
Unit → component → integration → system → acceptance. The boundaries and names vary by organization.

## Test pyramid
Keep many fast, focused unit tests; a smaller set of integration tests; and a carefully selected set of end-to-end tests. The pyramid is a heuristic, not a law.

## Exercise
For a password-reset feature, identify one unit, one integration, one API, and one E2E test. Explain which risk each catches.
