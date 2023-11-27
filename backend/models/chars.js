const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharSchema = new Schema({
  name: { type: String },
  xCoords: { type: String },
  yCoords: { type: String },
});

module.exports = mongoose.model('char', CharSchema);
