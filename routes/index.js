const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageTitle: 'Welcome to the main page!',
    otherVar: 'This is some serious content!'
  });
});

module.exports = router;
