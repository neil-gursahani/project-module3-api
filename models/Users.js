const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dateOfBirth: {type: Date},
    investingExperience: {type: String,  enum: ['Beginner', 'Intermediate', 'Advanced']}
});

const User = mongoose.model('user', userSchema);

module.exports = User;