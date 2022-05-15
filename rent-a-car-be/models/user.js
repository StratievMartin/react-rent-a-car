const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        required: true,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User;