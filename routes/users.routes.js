const express = require('express');
const router = express.Router();
const { register, isUserSignIn } = require('../controllers/users.controller');

// Create a new User
router.post('/users', register);

// Is sign in
router.post('/users/:userId', isUserSignIn);


module.exports = router;