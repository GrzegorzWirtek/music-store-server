import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
	name: String,
	description: String,
	price: Number,
	productsInTheCart: Number,
	productsInTheShop: Number,
	imageBase64: String,
});

const ProductModel = mongoose.model('product', productSchema);
export default ProductModel;
