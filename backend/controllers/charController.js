const Char = require('../models/chars');
const asyncHandler = require('express-async-handler');

exports.char_get = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const allChars = await Char.find().exec();
  res.json({ allChars });
});

exports.char_post = asyncHandler(async (req, res, next) => {
  const char = await Char.findOne({ name: req.body.name }).exec();

  if (
    req.body.x >= +char.xCoords - 2.5 &&
    req.body.x <= +char.xCoords + 2.5 &&
    req.body.y >= +char.yCoords - 2.5 &&
    req.body.y <= +char.yCoords + 2.5
  ) {
    console.log('Success');
    console.log(req.body);
    res.json({ char, message: 'Success' });
  } else {
    res.json({ message: 'failure' });
  }
});
