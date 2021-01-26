const User = require('../models/User');

/**
 * @returns {Object[]} Users
 */
const getUsers = async () => await User.find({});


module.exports = {
    getUsers,
}