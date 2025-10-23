import { pool } from '#config/database.js';

export const taskModel = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
  },
  getById: async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
  },
  create: async (task) => {
    try {
      const result = await pool.query(
        `
      INSERT INTO tasks (title, description)
      VALUES ($1, $2) RETURNING title, description`,
        [task.title, task.description]
      );

      return result.rows;
    } catch (error) {
      console.log('error creating tasks', error);
      throw new Error('Error creating task');
    }
  },
  update: async (task) => {
    const { id, title, description } = task;
    try {
      const result = await pool.query(
        `
        UPDATE tasks 
        SET title = $1, description = $2
        WHERE id = $3
        RETURNING title, description`,
        [title, description, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('error in:', error);
      throw new Error('Error updating task');
    }
  },
  delete: async (id) => {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  },
  findByTitle: async (title) => {
    const result = await pool.query('SELECT * FROM tasks WHERE title = $1', [
      title,
    ]);
    return result.rows[0];
  },
};
