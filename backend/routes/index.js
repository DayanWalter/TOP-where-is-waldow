const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ start: 'This is the start' });
});

router.get('/chars/:id', controller.char_get);

router.post('/chars/:id', controller.char_post);

router.post('/picture', controller.time_post);

module.exports = router;
