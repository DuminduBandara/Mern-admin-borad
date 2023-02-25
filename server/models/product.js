import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
