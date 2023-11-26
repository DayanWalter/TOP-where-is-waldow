const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharSchema = new Schema({
  name: { type: String },
  xCoords: { type: Number },
  yCoords: { type: Number },
});

module.exports = mongoose.model('char', CharSchema);
