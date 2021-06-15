const AdminUser = require('../models/Auth');
const verify = require('./authVerify');

const router = require('express').Router();

router.get('/alladmonusers', verify, async (req, res) => {
    try {
        const results = await AdminUser.find().exec();
        res.send(results);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
