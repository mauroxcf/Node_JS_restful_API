const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/Auth');
const joi = require('joi');


// this validation is for the admin user input prerequisites
const registerSchema = joi.object({
    nombre: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    contraseña: joi.string().min(5).required(),
})

// signup user
router.post('/register', async (req, res) => {
    // check if user email already exist
    const emailExist = await AdminUser.findOne({ email: req.body.email });

    if (emailExist) {
        res.status(400).send('the email already exist');
        return;
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.contraseña, salt);

    // on process of adding new user

    const adminUsr = new AdminUser({
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: hashedPassword,
    })

    try {
        // validation of user input
        const { error } = registerSchema.validateAsync(req.body);

        // if error exist then send back the error
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
        else {
            // new admin user added

            const saveAdminUsr = await adminUsr.save();
            res.json({saveAdminUsr});
        }

    } catch (error) {
        res.json({ message: err });
    }
});

// Login verification fields
const loginSchema = joi.object({
    email: joi.string().min(6).required().email(),
    contraseña: joi.string().min(5).required(),
});

// login user
router.post('/login', async (req, res) => {
    // check if user email already exist
    const admonUser = await AdminUser.findOne({ email: req.body.email });
    if (!admonUser) return res.status(400).send('invalid email- ID');

    // checkin if the password matches
    const validPassword = await bcrypt.compare(req.body.contraseña, admonUser.contraseña);
    if (!validPassword) return res.status(400).send('Incorrect password');

    try {
        // validation of user input
        const { error } = loginSchema.validateAsync(req.body);
        // if error exist then send back the error
        if (error) return res.status(400).send(error.details[0].message);
        else {
            // make the login event
            res.send('Success');
        }

    } catch (error) {
        res.json({ message: err });
    }
});

module.exports = router
