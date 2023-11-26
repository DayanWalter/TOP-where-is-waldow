const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: { type: String },
  time: { type: Number },
});

module.exports = mongoose.model('player', PlayerSchema);
