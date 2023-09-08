//user schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, required: [true, "Please provide your email"], unique: true, validate: {
            validator: function (value) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, message: props => `${props.value} is not a valid email!`
        }
    },
    password: { type: String, required: [true, "Please provide password"] },
});
const User = mongoose.model('User', userSchema);
module.exports = { User };