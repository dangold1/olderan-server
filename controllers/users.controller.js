const usersService = require('../services/users.service');
const validationService = require('../services/validation.service');

/**
 * @param {Object} req.body.data
 * @returns {Object} New User
 */
const register = async (req, res) => {
    const userData = req.body;
    const error = validationService.isCreateValid(userData);
    if (error) {
        res.status(400).json(error.message);
        return;
    }

    try {
        let newUser = await usersService.register(userData);
        res.json(newUser);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}

/**
 * @param {Object} req.params.id
 * @returns {Object || NULL} User
 */
const isUserSignIn = async (req, res) => {
    const { userId } = req.params;
    try {
        let result = await usersService.getUserById(userId);
        res.json(result ? result : "UserId Not Found");
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}


module.exports = {
    register,
    isUserSignIn,
}