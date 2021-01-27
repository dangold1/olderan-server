const express = require('express');
const router = express.Router();
const { register, signin } = require('../controllers/auth.controller');

// @route POST api Create a new User
router.post('/users/register', register);

// @route POST api Is sign in
router.post('/users/signin', signin);


module.exports = router;