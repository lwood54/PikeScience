$(".section1Choices, .section2Choices").draggable();

var cardArray = [
  $("#adapt1"),
  $("#adapt2"),
  $("#adapt3"),
  $("#natSel1"),
  $("#natSel2"),
  $("#natSel3"),
  $("#selBr1"),
  $("#selBr2"),
  $("#selBr3"),
  $("#gills1"),
  $("#gills2"),
  $("#gills3"),
  $("#xylem1"),
  $("#xylem2"),
  $("#xylem3")
];

$.each(cardArray, function(index, value) {
  var rand = Math.floor(Math.random() * cardArray.length);
  var zIndexVal = rand;
  cardArray[index].css('z-index', "" + zIndexVal);
});


//////////////////////////////////////////////////////////////////////////
////  SECTION 1 ////
//////////////////////////////////////////////////////////////////////////

//////// NATURAL SELECTION COLUMN
function natSelDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if ($("#" + containerId).hasClass("fillGreen")) {
    return true;
  }
  if (elId === "natSel1" || elId === "natSel2" || elId === "natSel3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#natSelTarget1, #natSelTarget2, #natSelTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          natSelDropAction(event, ui, containerId);
      }
    });

//////// ADAPTATION COLUMN
function adaptDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "adapt1" || elId === "adapt2" || elId === "adapt3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#adaptTarget1, #adaptTarget2, #adaptTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          adaptDropAction(event, ui, containerId);
      }
    });

////////// SELECTIVE BREEDING COLUMN
function selBrDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "selBr1" || elId === "selBr2" || elId === "selBr3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#selBrTarget1, #selBrTarget2, #selBrTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          selBrDropAction(event, ui, containerId);
      }
    });

////////// GILLS COLUMN
function gillsDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "gills1" || elId === "gills2" || elId === "gills3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#gillsTarget1, #gillsTarget2, #gillsTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          gillsDropAction(event, ui, containerId);
      }
    });

////////// XYLEM COLUMN
function xylemDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "xylem1" || elId === "xylem2" || elId === "xylem3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#xylemTarget1, #xylemTarget2, #xylemTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          xylemDropAction(event, ui, containerId);
      }
    });


function pickNextCard() {
  // randomly sort through an array of cards that will then be
  // placed in their proper locations
  // once card is properly placed, it will be removed from the array
  // and another random card will be selected.
}


//////////////////////////////////////////////////////////////////////////
////  SECTION 2 ////
//////////////////////////////////////////////////////////////////////////

////////  BULB COLUMN
function bulbDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "bulb1" || elId === "bulb2" || elId === "bulb3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#bulbTarget1, #bulbTarget2, #bulbTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          bulbDropAction(event, ui, containerId);
      }
    });


//////// HIBERNATION COLUMN
function hibDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "hib1" || elId === "hib2" || elId === "hib3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#hibTarget1, #hibTarget2, #hibTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          hibDropAction(event, ui, containerId);
      }
    });

////////// MIGRATION COLUMN
function migDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "mig1" || elId === "mig2" || elId === "mig3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#migTarget1, #migTarget2, #migTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          migDropAction(event, ui, containerId);
      }
    });

////////// TRAITS COLUMN
function traitsDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "trait1" || elId === "trait2" || elId === "trait3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#traitTarget1, #traitTarget2, #traitTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          traitsDropAction(event, ui, containerId);
      }
    });

////////// GENERATION COLUMN
function genDropAction(event, ui, containerId) {
  var elId = ui.draggable.context.id;
  if (elId === "gen1" || elId === "gen2" || elId === "gen3") {
    if ($("#" + containerId).hasClass("fillRed")) {
      $("#" + containerId).removeClass("fillRed");
    }
    $("#" + containerId).addClass("fillGreen");
    $("#" + elId).draggable("disable");
  } else {
    if (!$("#" + containerId).hasClass("fillGreen")) {
      $("#" + containerId).addClass("fillRed");
    }
  }
}

$("#genTarget1, #genTarget2, #genTarget3").droppable({
      drop: function(event, ui) {
          var containerId = this.id;
          genDropAction(event, ui, containerId);
      }
    });
