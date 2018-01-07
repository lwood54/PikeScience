const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageTitle: 'Using pageTitle variable!',
    otherVar: 'This is some serious content!'
  });
});

module.exports = router;
