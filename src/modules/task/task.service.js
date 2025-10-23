import { taskModel } from './task.model.js';

export const taskService = {
  getAll: async () => {
    const tasks = await taskModel.getAll();
    return tasks;
  },
  createTask: async (data) => {
    try {
      const { title } = data;

      const titleExisting = await taskModel.findByTitle(title);

      if (titleExisting) {
        throw new Error('Tasks already in exist');
      }

      const newTasks = await taskModel.create(data);
      return newTasks;
    } catch (error) {
      console.log('error in service', error);
      throw new Error('Error in service');
    }
  },
};
