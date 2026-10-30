# 04 — Integration testing

Integration tests verify that boundaries work together: application + database, service + queue, or middleware + route.

Use real dependencies where practical, disposable test resources, migrations, and deterministic cleanup. Do not confuse an in-memory fake with proof that a real database integration works.

## Exercise
Add a repository adapter and test it against a disposable PostgreSQL database. Verify persistence, uniqueness, rollback, and cleanup.
