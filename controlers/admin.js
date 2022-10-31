import AdminModel from '../models/adminModel.js';

export const getAdminData = async (req, res) => {
	try {
		const { login: clientLogin, password: clientPassword } = req.body;

		const loginData = await AdminModel.find();
		const { login, password } = loginData[0];

		res.status(200).json({
			login: login === clientLogin,
			password: password === clientPassword,
		});
	} catch (error) {
		console.log('getAdminData error message: ', error);
	}
};
