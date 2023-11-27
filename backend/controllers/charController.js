const Char = require('../models/chars');

exports.char_get = (req, res) => {
  res.json({ name: 'Rick', xCoords: 12.5, yChoords: 13.4 });
};
