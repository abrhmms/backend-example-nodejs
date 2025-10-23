import { z } from 'zod';

const taskSchema = z.object({
  title: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  description: z
    .string()
    //.min(2, 'Description must be at leats 2 characters')
    .max(50, 'Description cannot be exceed 50 characters'),
});

export function validateTasks(req, res, next) {
  const result = taskSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.format();
    return res.status(400).json({ errors });
  }
  req.body = result.data;
  next();
}
