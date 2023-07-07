const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
