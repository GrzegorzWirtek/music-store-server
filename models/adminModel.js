import mongoose, { Schema } from 'mongoose';

const adminSchema = new Schema({
	login: String,
	password: String,
});

const AdminModel = mongoose.model('admin', adminSchema);
export default AdminModel;
