const mongoose = require('mongoose');

const User = mongoose.model('users', new mongoose.Schema({
    nickname: String,
    username: String,
    password: String,
    role: String,
    created_time: { type : Date, default: Date.now },
}));

module.exports = User;