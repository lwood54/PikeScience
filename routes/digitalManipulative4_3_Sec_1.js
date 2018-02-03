const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 4.3 Section 1 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate',
    title: "4.3 Section 1",
    pageTitle: "Digital Manipulative: Unit 4.3 Section 1",
    subHeading: 'Catastrophic Events and Ecological Succession',
    col1Heading: 'Microhabitat',
    col1Img: "images/microhabitat.jpg",
    col1Hint: "HINT: A flowerbed in front of a school.",
    col1Def: "DEFINITION: A habitat that is of small extent and is different from its surrounding habitat.",
    col2Heading: "Tornado",
    col2Img: "images/tornadoGif.gif",
    col2Hint: "HINT: Churning winds, top speed over 300 mph.",
    col2Def: "DEFINITION: A destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud.",
    col3Heading: "Flood",
    col3Img: "images/floodingGif.gif",
    col3Hint: "HINT: Excess water",
    col3Def: "DEFINITION: an overflowing of a large amount of water beyond its normal confines.",
    col4Heading: "Earthquake",
    col4Img: "images/earthquakeGif.gif",
    col4Hint: "HINT: These are common along transform boundaries and can cause tsunamis.",
    col4Def: "DEFINITION: A sudden and violent shaking of the ground, usually due to slipping or colliding tectonic plates.",
    col5Heading: "Hurricane",
    col5Img: "images/hurricaneGif.gif",
    col5Hint: "HINT: Churning winds, top speed over 160 mph.",
    col5Def: "DEFINITION: High velocity vortex that forms over warm ocean water and often causes flooding on landfall."
  });
});

module.exports = router;
