const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

//Import MongoDB models
const User = require('../models/User')

//Validation import
const { registerValidation, loginValidation } = require('../validation');

// using the router method post to register a user
router.post('/register', async (req, res) => {

	// Validate User
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if User already in database
	const emailExist = await User.findOne({ email: req.body.email });
	if(emailExist) return res.status(400).send('Email already exists');

	// Validated And Create User
	const user = new User({
		name: req.body.name,
		email: req.body.email
	});

	try{
		const savedUser = await user.save();
		res.json({ name: user.name, email: user.email });
	} catch (err) {
		res.json({ message: err });
	}
});

// Login User
router.post('/login', async(req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if Email Exists
	const user = await User.findOne({ email: req.body.email });
	if(!user) return res.status(400).send('Email Does Not Exist');

	// Create & Assign Token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});

// Delete user
router.delete('/:uid/only', async(req, res) => {
	try {
		const removedUser = await User.remove({ _id: req.params.uid });
		res.json(removedUser);
	} catch(err) {
		res.json({ message: err });
	}
});

router.delete('/:uid/all', async(req, res) => {
	try {
		const removedUser = await User.remove({ _id: req.params.uid, get: req.body });
		res.json(removedUser);
	} catch(err) {
		res.json({ message: err });
	}
});

module.exports = router;
