let greenCount = 0;
let redCount = 0;

//////////////// FUNCTIONS ////////////////
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};
const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
      // use try/catch to avoid console error when expecting if no children
  try {
    // make sure there is no choice card already in the div
    let evObj = document.getElementById(ev.target.id);
    if (ev.target.classList.contains('choices')) {
      return false;
    } else if (evObj.children.length > 0) {
        return false;
    } else {
        ev.preventDefault();
        let elId = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(elId));
        checkDropZone(ev.target.id, elId);
    }
  }
  catch(err) {
    console.log("Expected error if no children: ", err);
  }
};

const mouseOver = (ev) => {
    ev.target.style.transform = "scale(1.1)";
    ev.target.style.transition = "all 0.3s";
};

const mouseOut = (ev) => {
    ev.target.style.transform = "scale(1.0)";
    ev.target.style.transition = "all 0.1s";
};
  
const updateScore = () => {
    let scoreNumberEl = document.getElementById("number");
    let scoreWordEl = document.getElementById("scoreWord");
    scoreNumberEl.innerHTML = redCount;
    let percentRight = Math.ceil((15 - redCount)/15 * 100);
    let cardSelectionDiv = document.getElementById("cardSelection");
    let button = document.getElementById("nextButton");
    let currentHref = window.location.href;
    if (cardSelectionDiv.children.length <= 1) {
        scoreWordEl.innerHTML = "Score";
        scoreNumberEl.innerHTML = percentRight + "%";
        scoreNumberEl.style.paddingLeft = "15%";
        button.style.visibility = "visible";
        if (percentRight >= 70) {
            cardSelectionDiv.style.backgroundColor = "transparent";
        if (currentHref.includes("Sec_1")) {
            button.innerHTML = "NEXT CHALLENGE";
            button.addEventListener("click", () => {
                if (currentHref.includes("4_1_Sec_1")) {
                    location.href = "/digitalManipulative4_1_Sec_2";
                } else if (currentHref.includes("4_3_Sec_1")) {
                    location.href = "/digitalManipulative4_3_Sec_2";
                }
            });
        } else if (currentHref.includes("Sec_2")) {
            location.href = "/won";
            }
        } else {
            button.innerHTML = "TRY AGAIN, you need at least 70%.";
            button.style.fontSize = ".8em";
            cardSelectionDiv.style.backgroundColor = "transparent";
            button.addEventListener ("click", function() {
                // set new location to current window (should cause reload)
                location.href = window.location.href;
            });
        }
    }
};
///////////////////////////////////////////////////////////////////////
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
        console.log("");
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
    movingEl.style.cursor = "not-allowed";
    movingEl.style.backgroundColor = "transparent";
    movingEl.style.boxShadow = "none";
    movingEl.onmouseover = null;
    return true;
  }
  
  function whenBlankToTrue(targetEl, movingEl) {
    targetEl.classList.add("fillGreen");
    greenCount++;
    updateScore();
    targetEl.setAttribute("ondragover", false);
    movingEl.setAttribute("draggable", false);
    movingEl.style.cursor = "not-allowed";
    movingEl.style.backgroundColor = "transparent";
    movingEl.style.boxShadow = "none";
    movingEl.onmouseover = null;
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

///////////////////////////////////////////////////////////////////////



//////////////// LOGIC ////////////////

// 1. make a stack of random cards that will need to be placed on the gameBoard
const collectionOfCards = document.getElementsByClassName('choices');
let cardArray = [];
for (var i = 0; i < collectionOfCards.length; i++) {
    cardArray.push(collectionOfCards[i]);
}
cardArray.forEach((cardObj) => {
    let zIndexVal = Math.floor(Math.random() * cardArray.length);
    let index = cardArray.indexOf(cardObj);
    cardArray[index].style.zIndex = zIndexVal;
    cardArray[index].draggable = true;
    cardArray[index].onmouseover = mouseOver;
    cardArray[index].onmouseout = mouseOut;
    cardArray[index].ondragstart = drag;
    cardArray[index].addEventListener('touchmove', (ev) => {
        let touch = ev.targetTouches[0];
        cardArray[index].style.left = touch.pageX-5 + "px";
        cardArray[index].style.top = touch.pageY+5 + "px";
        ev.preventDefault();
    }, false);
    cardArray[index];
});

const collectionOfDropZones = document.getElementsByClassName("dropZone");
for(var i = 0; i < collectionOfDropZones.length; i++) {
  collectionOfDropZones[i].ondrop = drop;
  collectionOfDropZones[i].addEventListener('touchend', drop, false);
  collectionOfDropZones[i].ondragover = allowDrop;
}

// 2. make the ability to drag those cards anywhere on the screen


// 3. check for placement accuracy
//      a. if correct:
//          - turn parent div green
//          - lock card into place in the center of the parent div
//      b. if incorrect:
//          - turn parent div red
//          - it should still look like a card that you can drag

//  4. GOALS FOR DRAGGING INTERACTION:
//      a. see all cards while dragging
//      b. card can be placed anywhere, including back down by scoreboard to be moved out of the way
//      c. allow for touchscreen movement of cards

//  5. GOALS FOR GAME:
//      a. keep score, show accuracy
//      b. don't allow progress to section 2 unless 70% or higher
//      c. show a really cool celebration page when a section 2 has been completed.
