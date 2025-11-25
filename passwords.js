//Strength checker code
function passwordStrength(password) {
  if (isCommonPassword(password)) {
    document.getElementById("password").style.border = "5px solid red";
    changeText("Instantly");
    return;
  }
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowerCount = 0;
  var upperCount = 0;
  var numCount = 0;
  var charCount = 0;
  for (var i = 0; i < password.length; i++) {
    if (lowercaseLetters.includes(password[i])) {
      lowerCount++;
    } else if (uppercaseLetters.includes(password[i])) {
      upperCount++;
    } else if (numList.includes(password[i])) {
      numCount++;
    } else {
      charCount++;
    }
  }
  var possibleChars = 0;
  if (lowerCount > 0) possibleChars += 26;
  if (upperCount > 0) possibleChars += 26;
  if (numCount > 0) possibleChars += 10;
  if (charCount > 0) possibleChars += 33;
  possibleChars = possibleChars ** (password.length - 1);
  var crackFactor = 10 ** 10;
  var crackTime = possibleChars / crackFactor;
  changeText(numToTime(crackTime));
}

function numToTime(number) {
  var largeThresholds = [
    0.9, 1, 60, 3600, 86400, 604800, 2628000, 31540000, 31540000000,
    31540000000000,
  ];
  var largeNames = [
    "Instantly",
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
    "thousand year",
    "million year",
  ];
  var colorList = [
    "#ff4d4d", // Instantly - red
    "#ff704d", // second - orange red
    "#ff944d", // minute - orange
    "#ffb84d", // hour - golden orange
    "#ffd24d", // day - yellow
    "#d2ff4d", // week - yellow-green
    "#a6ff4d", // month - light green
    "#4dff88", // year - green
    "#4dd2ff", // thousand year - sky blue
    "#4d88ff", // million year - strong blue
  ];

  var numIndex = 0;
  var namePlural = "";

  while (
    numIndex < largeThresholds.length - 1 &&
    number >= largeThresholds[numIndex + 1]
  ) {
    numIndex++;
  }

  if (numIndex === 0) {
    document.getElementById("password").style.border = "5px solid red";
    return "Instantly";
  }

  number = number / largeThresholds[numIndex];
  if (Math.round(number + 0.5) !== 1) {
    namePlural = "s";
  }
  document.getElementById("password").style.border =
    "5px solid" + colorList[numIndex];
  return Math.round(number + 0.5) + " " + largeNames[numIndex] + namePlural;
}

function isCommonPassword(pass) {
  var str = pass.toLowerCase();

  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) break;
    if (i === str.length - 2) return true;
  }

  var rows = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
    "1234567890",
    "!@#$%^&*()_+",
    "password",
  ];

  for (var r = 0; r < rows.length; r++) {
    if (rows[r].includes(str)) return true;
  }

  return false;
}

function changeText(newText) {
  document.getElementById("strength-text").innerText = newText;
}
function copyPassword() {
  var passText = document.getElementById("pwgen-output").innerText;
  navigator.clipboard.writeText(passText);
  document.getElementById("pwgen-output").innerText = "Copied!";
  setTimeout(function () {
    document.getElementById("pwgen-output").innerText = passText;
  }, 1000);
}
