const express = require('express');
const router = express.Router();

//Import MongoDB models
const User = require('../models/User')

//Validation import
const { registerValidation, loginValidation } = require('../validation');

// get all users
router.get('/list', async (req, res) => {
	const allUser = await User.find()
	res.send(allUser)
})

// using the router method post to register a user
router.post('/register', async (req, res) => {

	// Validate User
	//const { error } = registerValidation(req.body);
	//if (error) return res.status(400).send(error.details[0].message);

	// Check if User already in database
	//const emailExist = await User.findOne({ email: req.body.email });
	//if(emailExist) return res.status(400).send('Email already exists');

	// Validated And Create User
	const user = new User({
		nombre: req.body.nombre,
        apellido: req.body.apellido,
        doc_identidad: req.body.doc_identidad,
		email: req.body.email,
        celular: req.body.celular,
        fecha_de_nacimiento: req.body.fecha_de_nacimiento
	});

	try{
		const savedUser = await user.save();
		res.json({savedUser});
	} catch (err) {
		res.json({ message: err });
	}
});

//Update user
router.patch("/list/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (req.body.nombre) {
            user.nombre = req.body.nombre;
        }

        if (req.body.apellido) {
            user.apellido = req.body.apellido;
        }

        if (req.body.doc_identidad) {
            user.doc_identidad = req.body.doc_identidad;
        }

        if (req.body.email) {
            user.email = req.body.email;
        }

        if (req.body.celular) {
            user.celular = req.body.celular;
        }

        if (req.body.fecha_de_nacimiento) {
            user.fecha_de_nacimiento = req.body.fecha_de_nacimiento;
        }
        await user.save();
        res.send(user);
    } catch {
        res.status(404);
        res.send({ error: "User doesn't exist!" });
    }
});

// Delete user
router.delete("/list/:id", async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "User doesn't exist!" });
    }
});

//Delete all users
router.delete('/list/all', async(req, res) => {
	try {
		const removedUser = await User.remove({ _id: req.params.id, get: req.body });
		res.json(removedUser);
	} catch(err) {
		res.json({ message: err });
	}
});

module.exports = router;
