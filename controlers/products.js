import ProductModel from '../models/productModel.js';

export const getProducts = async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.status(200).json(products);
	} catch (error) {
		console.log('getProducts error message: ', error);
	}
};

// const newP = new ProductModel({
// 	name: 'Mobile phone',
// 	price: 1200,
// 	productsInTheCart: 1,
// 	productsInTheShop: 10,
// 	images: ['phone1', 'phone2', 'phone3'],
// });

// newP.save();
