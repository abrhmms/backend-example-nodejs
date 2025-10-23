import { taskModel } from './task.model.js';

export const taskService = {
  getAll: async () => await taskModel.getAll(),

  getById: async (id) => {
    const task = await taskModel.getById(id);
    if (!task) throw new Error('Task not found');
    return task;
  },

  createTask: async (task) => {
    const { title } = task;
    const titleExisting = await taskModel.findByTitle(title);
    if (titleExisting) {
      const error = new Error('Task already exist');
      error.statusCode = 400;
      throw error;
    }

    return await taskModel.create(task);
  },

  delete: async (id) => {
    const deleted = await taskModel.delete(id);
    if (!deleted) throw new Error('Task not found');
    return deleted;
  },

  update: async (task) => {
    const taskUpdate = await taskModel.update(task);
    return taskUpdate;
  },
};
