const User = require('../models/User');

/**
 * @param {Object} data { username }
 * @returns {Object || NULL} new User
 */
const isUsernameExists = async data => {
    try {
        let result = await User.findOne({ username: data.username });
        return result;
    } catch (err) {
        console.log(err);
    }
}

/**
 * @param {Object} userData { nickname, username, password, role, status }
 * @returns {Object} new User || false
 */
const register = async userData => {
    try {
        let newUser = new User(userData);
        let result = await newUser.save();
        return result;
    } catch (err) {
        console.log(err);
    }
}

/**
 * @param {Object} id 
 * @returns {Object} User
 */
const getUserById = async userId => await User.findById(userId).lean();


/**
 * @param {Object} data { username, password }
 * @returns {Object || NULL} User || NULL
 */
const signin = async data => {
    const { username, password } = data;
    try {
        let result = await User.findOne({ username: username, password: password });
        return result;
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    register,
    getUserById,
    signin,
    isUsernameExists,
}