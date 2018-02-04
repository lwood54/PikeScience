const express = require('express');
const router = express.Router();

/* GET the page for when user WON!. */
router.get('/', function(req, res, next) {
  res.render('won.handlebars', {
    pageTitle: "You won!!!"
  });
});

module.exports = router;
