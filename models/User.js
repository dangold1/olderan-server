const mongoose = require('mongoose');

const User = mongoose.model('users', new mongoose.Schema({
    nickname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    created_time: { type: Date, default: Date.now },
}));

module.exports = User;