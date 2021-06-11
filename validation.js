const Joi = require('joi');

// validate the fields of the created object
//validate the fields in registerValidation
const registerValidation = data => {
	const RegistrationSchema = Joi.object({
		nombre: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
	});

	return RegistrationSchema.validate(data);
};

//validate the fields in registerValidation
const loginValidation = data => {
	const LoginSchema = Joi.object({
        nombre: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email()
	});

	return LoginSchema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
