const User = require('../models/User');

/**
 * @param {Object} userData { nickname, username, password, role, status }
 * @returns {Object} new User
 */
const register = async userData => {
    try {
        let newUser = new User(userData);
        let result = await newUser.save();
        return result;
    } catch (err) {
        console.log(err);
        res.status(404);
    }
}

/**
 * @param {Object} id 
 * @returns {Object} User
 */
const getUserById = async userId => await User.findById(userId);


module.exports = {
    register,
    getUserById,
}