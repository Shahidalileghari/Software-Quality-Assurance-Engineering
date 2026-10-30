# 08 — Test doubles

- Dummy: passed but not used.
- Stub: returns controlled data.
- Spy: records calls.
- Mock: verifies expected interactions.
- Fake: lightweight working implementation.

Use doubles at genuine boundaries (network, clock, filesystem). Over-mocking can make tests pass while the integrated system is broken.
