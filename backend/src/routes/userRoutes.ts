import express from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers); // Fetch all users
router.post('/', createUser); // Create a new user
router.get('/:id', getUserById); // Get a user by ID
router.put('/:id', updateUser); // Update a user
router.delete('/:id', deleteUser); // Delete a user

export default router;
