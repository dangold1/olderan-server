const express = require('express');
const router = express.Router();
const { exportsUsers } = require('../controllers/admin.controller');

// @route GET api/admin Export all users data
router.get('/users', exportsUsers);


module.exports = router;