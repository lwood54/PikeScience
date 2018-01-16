var cardArray = [];
function addToCardArray(collectionObj) {
  for(var i = 0; i < collectionObj.length; i++) {
    cardArray.push(collectionObj[i]);
  }
}

// collecting all the cards for the stack
var col1CardCollection = document.getElementsByClassName("forCol1");
addToCardArray(col1CardCollection);

var col2CardCollection = document.getElementsByClassName("forCol2");
addToCardArray(col2CardCollection);

var col3CardCollection = document.getElementsByClassName("forCol3");
addToCardArray(col3CardCollection);

var col4CardCollection = document.getElementsByClassName("forCol4");
addToCardArray(col4CardCollection);

var col5CardCollection = document.getElementsByClassName("forCol5");
addToCardArray(col5CardCollection);

var greenCount = 0;
var redCount = 0;

cardArray.forEach(function(element) {
  var rand = Math.floor(Math.random() * cardArray.length);
    var zIndexVal = rand;
    var index = cardArray.indexOf(element);
    cardArray[index].style.zIndex = zIndexVal;
});

// collect all items to be draggable and droppable and put them in an array
var collectionOfDroppables = document.getElementsByClassName("section1Choices");
for(var i = 0; i < collectionOfDroppables.length; i++) {
   collectionOfDroppables[i].draggable = true;
   collectionOfDroppables[i].onmouseover = mouseOver;
   collectionOfDroppables[i].onmouseout = mouseOut;
   collectionOfDroppables[i].ondragstart = drag;
 }

var collectionOfDropZones = document.getElementsByClassName("dropZone");
for(var i = 0; i < collectionOfDropZones.length; i++) {
  collectionOfDropZones[i].ondrop = drop;
  collectionOfDropZones[i].ondragover = allowDrop;
}

function mouseOver(ev) {
  ev.target.style.transform = "scale(1.1)";
  ev.target.style.transition = "all 0.3s";
}
function mouseOut(ev) {
  ev.target.style.transform = "scale(1.0)";
  ev.target.style.transition = "all 0.1s";
}


function updateScore() {
  var scoreNumberEl = document.getElementById("number");
  var scoreWordEl = document.getElementById("scoreWord");
  scoreNumberEl.innerHTML = redCount;
  var percentRight = Math.ceil((15 - redCount)/15 * 100);
  var section1ChoicesDiv = document.getElementById("section1ChoicesContainer");
  var button = document.getElementById("nextButton");
  var currentHref = window.location.href;
  console.log(section1ChoicesDiv.children.length);
  if (section1ChoicesDiv.children.length <= 1) {
    scoreWordEl.innerHTML = "Score";
    scoreNumberEl.innerHTML = percentRight + "%";
    scoreNumberEl.style.paddingLeft = "15%";
    button.style.visibility = "visible";
    if (percentRight >= 70) {
      section1ChoicesDiv.style.backgroundColor = "transparent";
      if (currentHref.includes("Sec_1")) {
        button.innerHTML = "NEXT CHALLENGE";
        button.addEventListener ("click", function() {
          // after other units are made, I'll need to create a way to auto link to "Sec_2" here
          location.href = "/digitalManipulative4_1_Sec_2";
        });
      } else {
          // If section 2, then go back to home screen to select from other manipulatives
          button.innerHTML = "Home";
          button.addEventListener ("click", function() {
            // after other units are made, I'll need to create a way to auto link to "Sec_2" here
            location.href = "/";
          });
        }
    } else {
        button.innerHTML = "TRY AGAIN, you need at least 70%.";
        button.style.fontSize = ".8em";
        section1ChoicesDiv.style.backgroundColor = "transparent";
        button.addEventListener ("click", function() {
          // set new location to current window (should cause reload)
          location.href = window.location.href;
        });
      }
    }
  }

// on drag event, make droppable
// NOTE: with .setData("text", data) we are choosing what to label our data as, we are setting the "text",
// then later, we are "getting" that "text" which is the id in this case...then using that id to append it
// to the event.target
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// on drop event, place element in new location, appending as a child element
function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  // use try/catch to avoid console error when expecting if no children
  try {
    // make sure there is no choice card already in the div
    var evObj = document.getElementById(ev.target.id);
    if (ev.target.tagName === "IMG") {
      return false;
    } else if (evObj.children.length > 0) {
        return false;
    } else {
      ev.preventDefault();
      var elId = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(elId));
        checkDropZone(ev.target.id, elId);
    }
  }
  catch(err) {
    console.log("Expected error if no children: ", err);
  }
}

////////////////////////////////////////////////////////////////////////
//  SECTION 1 ////
////////////////////////////////////////////////////////////////////////

function checkDropZone(targetId, elId) {
  var targetEl = document.getElementById(targetId);
  var movingEl = document.getElementById(elId);
  if (targetEl.classList.contains("fillGreen")) {
    return true;
  } else if (checkForCol1(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        whenRedToTrue(targetEl, movingEl);
      } else {
        whenBlankToTrue(targetEl, movingEl);
      }
    } else if (checkForCol2(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        whenRedToTrue(targetEl, movingEl);
      } else {
        whenBlankToTrue(targetEl, movingEl);
      }
    } else if (checkForCol3(targetId, elId)) {
        if (targetEl.classList.contains("fillRed")) {
          whenRedToTrue(targetEl, movingEl);
        } else {
          whenBlankToTrue(targetEl, movingEl);
        }
      } else if (checkForCol4(targetId, elId)) {
          if (targetEl.classList.contains("fillRed")) {
            whenRedToTrue(targetEl, movingEl);
          } else {
            whenBlankToTrue(targetEl, movingEl);
          }
        } else if (checkForCol5(targetId, elId)) {
            if (targetEl.classList.contains("fillRed")) {
              whenRedToTrue(targetEl, movingEl);
            } else {
              whenBlankToTrue(targetEl, movingEl);
            }
            } else if (targetEl.classList.contains("fillRed")) {
              redCount++;
              updateScore();
              return false;
            } else {
              targetEl.classList.add("fillRed");
              redCount++;
              updateScore();
              return false;
            }
}

function whenRedToTrue(targetEl, movingEl) {
  targetEl.classList.remove("fillRed");
  targetEl.classList.add("fillGreen");
  greenCount++;
  updateScore();
  targetEl.setAttribute("ondragover", false);
  movingEl.setAttribute("draggable", false);
  return true;
}

function whenBlankToTrue(targetEl, movingEl) {
  targetEl.classList.add("fillGreen");
  greenCount++;
  updateScore();
  targetEl.setAttribute("ondragover", false);
  movingEl.setAttribute("draggable", false);
  return true;
}

function checkForCol1(targetId, elId) {
  var targetObj = document.getElementById(targetId);
  var choiceElObj = document.getElementById(elId);
  if (targetObj.classList.contains("targetCol1")) {
    if (choiceElObj.classList.contains("forCol1")) {
      return true;
    }
  }
  return false;
}

function checkForCol2(targetId, elId) {
  var targetObj = document.getElementById(targetId);
  var choiceElObj = document.getElementById(elId);
  if (targetObj.classList.contains("targetCol2")) {
    if (choiceElObj.classList.contains("forCol2")) {
      return true;
    }
  }
  return false;
}

function checkForCol3(targetId, elId) {
  var targetObj = document.getElementById(targetId);
  var choiceElObj = document.getElementById(elId);
  if (targetObj.classList.contains("targetCol3")) {
    if (choiceElObj.classList.contains("forCol3")) {
      return true;
    }
  }
  return false;
}

function checkForCol4(targetId, elId) {
  var targetObj = document.getElementById(targetId);
  var choiceElObj = document.getElementById(elId);
  if (targetObj.classList.contains("targetCol4")) {
    if (choiceElObj.classList.contains("forCol4")) {
      return true;
    }
  }
  return false;
}

function checkForCol5(targetId, elId) {
  var targetObj = document.getElementById(targetId);
  var choiceElObj = document.getElementById(elId);
  if (targetObj.classList.contains("targetCol5")) {
    if (choiceElObj.classList.contains("forCol5")) {
      return true;
    }
  }
  return false;
}
