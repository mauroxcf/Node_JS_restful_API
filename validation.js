const Joi = require('joi');

// validate the fields of the created object
//validate the fields in registerValidation
const registerValidation = data => {
	const RegistrationSchema = Joi.object({
		nombre: Joi.string().min(6).required(),
        apellido: Joi.string().min(6).required(),
        doc_identidad: Joi.number().min(6).required(),
		email: Joi.string().min(6).required().email(),
        celular: Joi.number().min(6).required(),
        fecha_de_nacimiento: Joi.date().min(6).required(),
	});

	return RegistrationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
