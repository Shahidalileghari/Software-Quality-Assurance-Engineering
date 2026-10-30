let nextId = 1;
const tasks = [];

export function createTask(title) {
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

export function listTasks() {
  return [...tasks];
}
