# 06 — Contract testing

A contract describes the expectations between a provider and its consumers. OpenAPI documents a public HTTP contract; consumer-driven contract tools can verify compatibility across independently deployed services.

Test required fields, types, enums, nullability, status codes, and backward compatibility. Avoid treating a schema check as proof of business correctness.

## Exercise
Define an OpenAPI schema for task creation and add positive, invalid, and compatibility test cases.
