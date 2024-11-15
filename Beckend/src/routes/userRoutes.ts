import express from 'express';
import { createUser } from '../controllers/userController';

const router = express.Router();

router.post('/user', (req, res) => {
  const { name, email } = req.body;
  try {
    const user = createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;