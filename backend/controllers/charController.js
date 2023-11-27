const Char = require('../models/chars');
const asyncHandler = require('express-async-handler');

exports.char_get = asyncHandler(async (req, res, next) => {
  const allChars = await Char.find().exec();
  res.json({ allChars });
});
