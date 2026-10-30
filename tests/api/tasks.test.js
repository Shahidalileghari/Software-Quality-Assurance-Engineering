import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from '../../demo-app/app.js';

describe('tasks API', () => {
  it('exposes a health endpoint', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('creates a task and returns 201', async () => {
    const response = await request(app).post('/tasks').send({ title: 'Review pull request' });
    expect(response.status).toBe(201);
    expect(response.body.data).toMatchObject({ title: 'Review pull request', completed: false });
  });

  it('rejects an empty title', async () => {
    const response = await request(app).post('/tasks').send({ title: '   ' });
    expect(response.status).toBe(400);
    expect(response.body.title).toBe('Validation failed');
  });

  it('returns a structured 404 response', async () => {
    const response = await request(app).get('/does-not-exist');
    expect(response.status).toBe(404);
    expect(response.body.title).toBe('Not found');
  });
});
