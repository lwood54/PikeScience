const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nat_sel_manipulative', {
    pageTitle: "Digital Manipulative 4.1"
  });
});

module.exports = router;
