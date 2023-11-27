const express = require('express');
const router = express.Router();
const char_controller = require('../controllers/charController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ start: 'This is the start' });
});

// Get Chars //
// Rick
router.get('/chars', char_controller.char_get);

module.exports = router;
