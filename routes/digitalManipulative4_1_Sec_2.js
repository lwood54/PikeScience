const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 4.1 Section 2 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate.handlebars',
    title: "4.1 Section 2",
    pageTitle: "Digital Manipulative: Unit 4.1 Section 2",
    subHeading: "Natural Selection and Selective Breeding",
    col1Heading: "Bulb",
    col1Img: "/images/plantBulb.jpg",
    col1Hint: "Onions, tulips, and lillies have these.",
    col1Def: "A rounded underground food storage organ in some plants.",
    col2Heading: "Hibernation",
    col2Img: "/images/hibernation.jpg",
    col2Hint: "Skunks, bees, snakes, groundhogs, bears, and bats do this in the winter.",
    col2Def: "Passing the winter in a sleeping or inactive condition.",
    col3Heading: "Migration",
    col3Img: "/images/migrationGif.gif",
    col3Hint: "Flamingos, elk, moose, geese, and wildebeests are well known for doing this.",
    col3Def: "Seasonal movement of animals from one region to another which increases their chance of survival.",
    col4Heading: "Trait",
    col4Img: "/images/trait.jpg",
    col4Hint: "eye color, hair type, skin color, size of wings, overall speed",
    col4Def: "A distinguishing quality or characteristic.",
    col5Heading: "Generation",
    col5Img: "images/generation.jpg",
    col5Hint: "child / parent / grandparent",
    col5Def: "A group born and living at about the same time. Birth to the average age of reproduction."
  });
});

module.exports = router;
