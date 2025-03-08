/*
      Main Page Visual Effects
*/

//from source: https://usefulangle.com/post/75/typing-effect-animation-javascript-css

var textList = [
  "Welcome to SilverShield",
  "Don't Know where to start?",
  "Visit the Resources page to get started",
];

var sentence = 0;

// Character number of the current sentence being processed
var sentenceIndex = 0;

// Holds the handle returned from setInterval
var interval;

// Element that holds the text
var textElem = document.querySelector("#text");

// Cursor element
var cursor = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = textList[sentence].substring(0, sentenceIndex + 1);
  textElem.innerHTML = text;
  sentenceIndex++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === textList[sentence]) {
    // Hide the cursor
    cursor.style.display = "none";

    clearInterval(interval);
    setTimeout(function () {
      interval = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = textList[sentence].substring(0, sentenceIndex - 1);
  textElem.innerHTML = text;
  sentenceIndex--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(interval);

    // If current sentence was last then display the first one, else move to the next
    if (sentence == textList.length - 1) sentence = 0;
    else sentence++;

    sentenceIndex = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      cursor.style.display = "inline-block";
      interval = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
interval = setInterval(Type, 50);
