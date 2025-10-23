import { Router } from 'express';
import { validateTasks } from './task.validator.js';
import { taskController } from './task.controller.js';

const router = Router();

router.get('/', taskController.getAll);

router.get('/tasks/:id', (req, res) => {
  res.json({ message: 'una tarea' });
});

router.post('/', validateTasks, taskController.create);

router.patch('/tasks/:id', (req, res) => {
  res.json({ message: 'modifica una tarea' });
});

router.delete('/tasks/:id', (req, res) => {
  res.json({ message: 'elimina tarea' });
});

export default router;
