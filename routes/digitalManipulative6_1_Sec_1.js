const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 6.1 Section 1 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate.handlebars',
    title: '6.1 Section 1',
    pageTitle: 'Digital Manipulative: Unit 6.1 Section 1',
    subHeading: 'Weathering, Erosion, and Deposition',
    col1Heading: 'Weathering',
    col1Img: 'images/mechanical_weathering.jpg',
    col1Hint: 'Examples include ice wedging and oxidation',
    col1Def:
      'Breaking down larger rocks into smaller and smaller pieces of sediment.',
    col2Heading: 'Erosion',
    col2Img: 'images/erosion.jpg',
    col2Hint: "It is the 'take it', in 'Break it, take it, drop it.",
    col2Def: 'The gradual wearing away, removal, and transport of sediment.',
    col3Heading: 'Deposition',
    col3Img: 'images/deposition.jpg',
    col3Hint: "It is the 'drop it', in 'Break it, take it, drop it.'",
    col3Def:
      'Dropping off sediment after agents of erosion have transported it.',
    col4Heading: 'Permeable',
    col4Img: 'images/permeable.jpg',
    col4Hint: 'lets water through',
    col4Def: 'Material allowing liquids or gases to pass through it.',
    col5Heading: 'Porosity',
    col5Img: 'images/porosity.gif',
    col5Hint: 'More tightly packed rocks means this is lower.',
    col5Def:
      'The quality of being porous, or full of tiny holes. More of this means liquid passes more easily.'
  });
});

module.exports = router;
