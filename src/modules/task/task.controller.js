import { taskService } from './task.service.js';

export const taskController = {
  getAll: async (req, res) => {
    try {
      const tasks = await taskService.getAll();
      res.json(tasks);
    } catch {
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  },
  create: async (req, res) => {
    try {
      const newTask = await taskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      if (error.message === 'Task title already exists') {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: 'Error creating task' });
    }
  },
};
