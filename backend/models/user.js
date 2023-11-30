const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: { type: String },
  start: { type: Number },
  end: { type: Number },
  elapsed: { type: Number },
});

module.exports = mongoose.model('user', UserSchema);
