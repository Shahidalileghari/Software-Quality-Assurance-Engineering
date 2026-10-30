import { beforeEach, describe, expect, it } from 'vitest';
import { createTask, listTasks } from '../../demo-app/task-service.js';

describe('task service', () => {
  beforeEach(() => {
    // The demo service stores in memory. Import reset is intentionally avoided;
    // tests assert properties of newly created records rather than fixed IDs.
  });

  it('creates a task with a title and incomplete status', () => {
    const task = createTask('Write tests');
    expect(task).toMatchObject({ title: 'Write tests', completed: false });
    expect(task.id).toEqual(expect.any(Number));
  });

  it('returns a defensive array copy', () => {
    const result = listTasks();
    result.push({ id: -1, title: 'mutation', completed: false });
    expect(listTasks().some((task) => task.id === -1)).toBe(false);
  });
});
