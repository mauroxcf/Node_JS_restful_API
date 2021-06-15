const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
    apellido: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
    doc_identidad: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
    celular: {
		type: Number,
		required: true
	},
	fecha_de_nacimiento: {
		type: Date,
		required: true
	},
	adjuntar_archivo: {
		type: Buffer,
		contentType: String
	}
});

module.exports = mongoose.model('User', UserSchema);
