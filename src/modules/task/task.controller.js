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
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await taskService.getById(id);
      res.json(task);
    } catch {
      res.status(404).json({ error: 'Error fetching task' });
    }
  },
  create: async (req, res) => {
    try {
      const newTask = await taskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      const status = error.statusCode || 500;
      res.status(status).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const task = {
        id: req.params.id,
        ...req.body,
      };

      const taskUpdate = await taskService.update(task);
      res.json(taskUpdate);
    } catch {
      res.status(500).json({ error: 'Error updating task' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await taskService.delete(id);
      if (!deleted) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.json({ message: 'Task deleted successfully' });
    } catch {
      res.status(500).json({ error: 'Error deleting task' });
    }
  },
};
