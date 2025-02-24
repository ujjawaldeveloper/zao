import express from 'express';
import {
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviewController';

const router = express.Router();
router.get('/product/:productId', getReviewsByProduct);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
