import { Request, Response } from 'express';
import Order from '../models/orderModel';

// Get all orders
export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch orders.' });
  }
};

// Create a new order
export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, products, totalAmount, status } = req.body;
    const order = new Order({ user, products, totalAmount, status });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to create order.' });
  }
};

// Get an order by ID
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product');
    if (!order) {
      res.status(404).json({ message: 'Order not found.' });
      return;
    }
    res.json(order);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to fetch order.' });
  }
};

// Update an order's status
export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!order) {
      res.status(404).json({ message: 'Order not found.' });
      return;
    }
    res.json(order);
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to update order status.' });
  }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      res.status(404).json({ message: 'Order not found.' });
      return;
    }
    res.json({ message: 'Order deleted successfully.' });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to delete order.' });
  }
};
