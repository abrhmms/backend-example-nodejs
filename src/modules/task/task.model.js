import { pool } from '#config/database.js';

export const taskModel = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
  },
  getById: async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows;
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
  findByTitle: async (title) => {
    const result = await pool.query('SELECT * FROM tasks WHERE title = $1', [
      title,
    ]);
    return result.rows[0];
  },
};
