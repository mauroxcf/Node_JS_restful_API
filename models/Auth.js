const mongoose = require('mongoose');

const AdminUserSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
    contraseña: {
		type: String,
		required: true,
        min: 5,
	}
});

module.exports = mongoose.model('AdminUser', AdminUserSchema);
