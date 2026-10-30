# 10 — Performance testing

Distinguish load, stress, spike, soak, and capacity testing. Track latency percentiles (especially p95/p99), throughput, error rate, saturation, and resource use.

Start with a baseline and realistic workload model. Set thresholds based on service objectives, not arbitrary internet defaults. Never load-test systems without authorization.

Run the sample with k6 installed: `k6 run performance/tasks.js`.
