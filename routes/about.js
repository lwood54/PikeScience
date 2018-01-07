const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', {
    pageTitle: 'This is the about page! (from about.js)',
    otherVar: 'This is some serious content!'
  });
});

module.exports = router;
