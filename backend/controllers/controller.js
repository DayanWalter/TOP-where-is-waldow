const Char = require('../models/chars');
const User = require('../models/user');

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
    res.json({ char, message: 'Success' });
  } else {
    res.json({ message: 'failure' });
  }
});

exports.user_get = asyncHandler(async (req, res, next) => {
  const allUser = await User.find().exec();
  res.json(allUser);
});

exports.user_post = asyncHandler(async (req, res, next) => {
  const startTime = req.body.start;
  const endTime = req.body.end;
  const elapsedTime = endTime - startTime;

  const user = new User({
    start: req.body.start,
    end: req.body.end,
    user: req.body.user,
    elapsed: elapsedTime,
  });
  await user.save();

  res.json({
    start: req.body.start,
    end: req.body.end,
    user: req.body.user,
    elapsed: elapsedTime,
  });
});
