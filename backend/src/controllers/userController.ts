import { Request, Response } from 'express';
import User from '../models/userModel';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to create user.' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }
    res.json(user);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch user.' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }
    res.json(user);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to update user.' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }
    res.json({ message: 'User deleted successfully.' });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to delete user.' });
  }
};
