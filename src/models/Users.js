const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id - mongoose schema auto created id
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        trim: true
    },

});

module.exports = mongoose.model('User', userSchema);