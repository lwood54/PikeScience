const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 4.1 Section 1 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate',
    title: "4.1 Section 1",
    pageTitle: "Digital Manipulative: Unit 4.1 Section 1",
    subHeading: 'Natural Selection and Selective Breeding',
    col1Heading: 'Natural Selection',
    col1Img: '/images/naturalSelectionGif.gif',
    col1Hint: "Over time, tigers that were better camouflaged could catch prey more easily.",
    col1Def: "The process where organisms that are better suited to their environment tend to survive and pass on their genes.",
    col2Heading: 'Adaptation',
    col2Img: '/images/adaptationGif.gif',
    col2Hint: "Hint: Birds now have hollow bones that enable flight, humans walk on 2 feet, snakes have venom.",
    col2Def: "A change in species by which it becomes better suited to survive its environment.",
    col3Heading: 'Selective Breeding',
    col3Img: "/images/selectiveBreedingGif.gif",
    col3Hint: "Hint: Your pet dog is no longer like a wolf, but has the traits that were chosen by a breeder.",
    col3Def: "Humans select the genes most desirable for our purposes and choose which individuals will pass on their genes.",
    col4Heading: 'Gills',
    col4Img: "/images/gillsGif.gif",
    col4Hint: "Hint: Found in fish and sharks internally, but even some salamanders have these externally.",
    col4Def: "The respiratory organs of fish and some amphibians in which oxygen is extracted from water.",
    col5Heading: 'Xylem',
    col5Img: "images/xylemGif.gif",
    col5Hint: "Hint: Functions in a similar manner to blood vessels in people.",
    col5Def: "The vessels in plants that move water and dissolved nutrients upward from the root."
  });
});

module.exports = router;
