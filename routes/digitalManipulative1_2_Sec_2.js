const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 1.2 Section 2 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate',
    title: "",
    pageTitle: "",
    subHeading: "",
    col1Heading: "",
    col1Img: "",
    col1Hint: "",
    col1Def: "",
    col2Heading: "",
    col2Img: "",
    col2Hint: "",
    col2Def: "",
    col3Heading: "",
    col3Img: "",
    col3Hint: "",
    col3Def: "",
    col4Heading: "",
    col4Img: "",
    col4Hint: "",
    col4Def: "",
    col5Heading: "",
    col5Img: "",
    col5Hint: "",
    col5Def: ""
  });
});

module.exports = router;
