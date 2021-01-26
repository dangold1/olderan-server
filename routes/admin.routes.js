const express = require('express');
const router = express.Router();
const { exportsUsers } = require('../controllers/admin.controller');

// Export all users data
router.get('/users', exportsUsers);


module.exports = router;