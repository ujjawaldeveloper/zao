import express from 'express';
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from '../controllers/orderController';

const router = express.Router();
router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.put('/:id/status', updateOrderStatus);
router.delete('/:id', deleteOrder);

export default router;
