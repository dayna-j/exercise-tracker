const mongoose = require('mongoose');
const log = (msg) => console.log(msg);
const shortId = require('');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        // unique: true,
        required: true,
        default: shortId.generate
    }
});

module.exports = User = mongoose.model('User', UserSchema);
