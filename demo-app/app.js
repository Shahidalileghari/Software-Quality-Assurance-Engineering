import express from 'express';
import { createTask, listTasks } from './task-service.js';

export const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

app.get('/tasks', (_req, res) => {
  res.status(200).json({ data: listTasks() });
});

app.post('/tasks', (req, res) => {
  const title = req.body?.title;
  if (typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({
      type: 'https://example.test/problems/validation',
      title: 'Validation failed',
      status: 400,
      detail: 'title must be a non-empty string'
    });
  }
  const task = createTask(title.trim());
  return res.status(201).json({ data: task });
});

app.use((_req, res) => res.status(404).json({
  type: 'https://example.test/problems/not-found',
  title: 'Not found',
  status: 404
}));
