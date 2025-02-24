import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    countInStock: number;
    images: string[];
    rating: number;
    numReviews: number;
    createdAt: Date;
  }
  
  const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true },
    images: [{ type: String, required: true }],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.model<IProduct>('Product', productSchema);
  