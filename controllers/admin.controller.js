const adminService = require('../services/admin.service');

/**
 * @returns {Object[]} Employees
 */
const exportsUsers = async (req, res) => {
    try {
        let users = await adminService.getUsers();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}

module.exports = {
    exportsUsers,
}