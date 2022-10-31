import ProductModel from '../models/productModel.js';

export const getProducts = async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.status(200).json(products);
	} catch (error) {
		console.log('getProducts error message: ', error);
	}
};

export const addProduct = async (req, res) => {
	try {
		const product = req.body;
		await new ProductModel(product).save();
		const products = await ProductModel.find();
		res.status(200).json(products);
	} catch (error) {
		console.log('addProduct error: ', error);
	}
};
