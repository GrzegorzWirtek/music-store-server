import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
	name: String,
	price: Number,
	productsInTheCart: Number,
	productsInTheShop: Number,
	imageBase64: String,
});

const ProductModel = mongoose.model('product', productSchema);
export default ProductModel;
