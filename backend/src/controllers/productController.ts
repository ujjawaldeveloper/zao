import { Request, Response } from 'express';
import Product from '../models/productModel';

// Get all products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch products.' });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, stock, category } = req.body;
    const product = new Product({ name, description, price, stock, category });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to create product.' });
  }
};

// Get a product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.json(product);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch product.' });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.json(product);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to update product.' });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }
    res.json({ message: 'Product deleted successfully.' });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to delete product.' });
  }
};
