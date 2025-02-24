import { Request, Response } from 'express';
import Category from '../models/categoryModel';

// Get all categories
export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch categories.' });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to create category.' });
  }
};

// Get a category by ID
export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found.' });
      return;
    }
    res.json(category);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch category.' });
  }
};

// Update a category
export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true }
    );
    if (!category) {
      res.status(404).json({ message: 'Category not found.' });
      return;
    }
    res.json(category);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to update category.' });
  }
};

// Delete a category
export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found.' });
      return;
    }
    res.json({ message: 'Category deleted successfully.' });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to delete category.' });
  }
};
