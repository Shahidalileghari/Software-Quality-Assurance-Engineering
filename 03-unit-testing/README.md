# 03 — Unit testing

A unit test checks a small unit of behavior with controlled dependencies. Focus on inputs, outputs, state changes, and meaningful edge cases.

## Arrange–Act–Assert
1. Arrange the state and dependencies.
2. Act once on the behavior.
3. Assert observable outcomes.

## Good test qualities
Fast, isolated, deterministic, readable, and behavior-focused. Avoid testing private implementation details.

Run: `npm test -- tests/unit`.
