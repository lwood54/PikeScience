const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 4.1 Section 2 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate',
    title: '6.1 Section 2',
    pageTitle: 'Digital Manipulative: Unit 6.1 Section 2',
    subHeading: 'Watersheds',
    col1Heading: 'Watershed',
    col1Img: 'images/watershed.gif',
    col1Hint:
      'Rain on a ridge flows in multiple directions. All land is a part of at least one.',
    col1Def:
      'An area or ridge of land that separates waters flowing to different rivers, basins, or seas.',
    col2Heading: 'Groundwater',
    col2Img: 'images/groundwater.gif',
    col2Hint:
      'An aquifer is included in this. You could access this with a well.',
    col2Def:
      'Water held underground in the soil or in pores and crevices in rock.',
    col3Heading: 'Surface Water',
    col3Img: 'images/surface_water.jpg',
    col3Hint: 'This includes ponds, lakes, rivers',
    col3Def: 'Water that collects on the surface of the ground.',
    col4Heading: 'Saturated',
    col4Img: 'images/saturated.jpg',
    col4Hint: 'describes a towel after you dropped it in a swimming pool',
    col4Def:
      'Holding as much water or moisture as can be absorbed; thoroughly soaked.',
    col5Heading: 'Water Table',
    col5Img: 'images/water_table.png',
    col5Hint:
      'represented by the dashed lines at the top of an aquifer in a diagram',
    col5Def:
      'The border between where the ground is saturated and not. (Upper level of the zone of saturation.)'
  });
});

module.exports = router;
