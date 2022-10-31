import dotenv from 'dotenv';
import express from 'express';
import moongose from 'mongoose';
import cors from 'cors';

import productsRoutes from './routes/products.js';
import adminRoutes from './routes/admin.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
app.use('/products', productsRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
	res.send('Welcome, this is from shop backend');
});

moongose
	.connect(process.env.MONGO_URL)
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`)),
	)
	.catch((error) => console.log('Error mongoose message: ', error));
