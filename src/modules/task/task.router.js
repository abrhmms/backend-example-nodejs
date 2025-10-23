import { Router } from 'express';
import { validateTasks } from './task.validator.js';
import { taskController } from './task.controller.js';

const router = Router();

router.get('/', taskController.getAll);

router.get('/:id', taskController.getById);

router.post('/', validateTasks, taskController.create);

router.patch('/:id', validateTasks, taskController.update);

router.delete('/:id', taskController.delete);

export default router;
