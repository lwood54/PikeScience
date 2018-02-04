const express = require('express');
const router = express.Router();

/* GET Manipulative for Unit 4.1 Section 2 page. */
router.get('/', function(req, res, next) {
  res.render('digitalManipulative', {
    layout: 'manipulativeTemplate',
    title: "4.3 Section 2",
    pageTitle: "Digital Manipulative: Unit 4.3 Section 2",
    subHeading: "Catastrophic Events and Ecological Succession",
    col1Heading: "Ecological Succession",
    col1Img: "images/ecolSuccess.gif",
    col1Hint: "A process of growth including different growth stages.",
    col1Def: "The gradual process by which an ecosystem changes and develops over time.",
    col2Heading: "Primary Succession",
    col2Img: "images/primarySuccession.png",
    col2Hint: "This stage starts with bare rock.",
    col2Def: "Starts in an environment in which is lacking vegetation and soil.",
    col3Heading: "Secondary Succession",
    col3Img: "images/secondarySuccession.png",
    col3Hint: "This stage starts with soil present.",
    col3Def: "Starts after an event that reduces the ecosystem, yet still has soil.",
    col4Heading: "Lichens",
    col4Img: "images/lichen.jpg",
    col4Hint: "Organism that helps break down rock.",
    col4Def: "Symbiotic set of organisms including fungi & algae that help break down rock and other organisms.",
    col5Heading: "Climax Community",
    col5Img: "images/rainforestGif.gif",
    col5Hint: "This is like the most exciting part of a story, but with an ecosystem.",
    col5Def: "Environment that has reached its growth potential and is in homeostasis."
  });
});

module.exports = router;
