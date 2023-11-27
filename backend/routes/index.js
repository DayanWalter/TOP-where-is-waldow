const express = require('express');
const router = express.Router();
const char_controller = require('../controllers/charController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ start: 'This is the start' });
});

// Get Chars //
// Rick
router.get('/chars/:id', char_controller.char_get);

router.post('/chars/:id', char_controller.char_post);

module.exports = router;
