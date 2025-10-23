import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Ingresando' });
});

router.post('/signup', (req, res) => {
  res.json({ message: 'registrandose' });
});

router.post('/signout', (req, res) => {
  res.json({ message: 'cerrando sesion' });
});

router.get('/profile', (req, res) => {
  res.json({ message: 'visualizando perfil' });
});

export default router;
