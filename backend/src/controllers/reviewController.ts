import { Request, Response } from 'express';
import Review from '../models/reviewModel';

// Get all reviews for a product
export const getReviewsByProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId });
    res.json(reviews);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch reviews.' });
  }
};

// Create a new review
export const createReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product, user, rating, comment } = req.body;
    const review = new Review({ product, user, rating, comment });
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to create review.' });
  }
};

// Update an existing review
export const updateReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rating, comment } = req.body;
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true, runValidators: true }
    );
    if (!review) {
      res.status(404).json({ message: 'Review not found.' });
      return;
    }
    res.json(review);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to update review.' });
  }
};

// Delete a review
export const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      res.status(404).json({ message: 'Review not found.' });
      return;
    }
    res.json({ message: 'Review deleted successfully.' });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to delete review.' });
  }
};
