const mongoose = require('mongoose');

const shortId = require('shortid');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  exercise: [{
    description: String,
    duration: Number,
    date: String,
  }],
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
