//Work in progress. Adding functionality for addition, sutraction and multiplication lol (Can only do addition for now)

function OneHasBeenClicked() {
    let outputFieldOne = document.getElementById("outputField")
    outputFieldOne.textContent += "1"
}

function twoHasBeenClicked() {
    let outputFieldTwo = document.getElementById("outputField")
    outputFieldTwo.textContent += "2"
}

function threeHasBeenClicked() {
    let outputFieldThree = document.getElementById("outputField")
    outputFieldThree.textContent += "3"
}

function fourHasBeenClicked() {
    let outputFieldFour = document.getElementById("outputField")
    outputFieldFour.textContent += "4"
}

function fiveHasBeenClicked() {
    let outputFieldFive = document.getElementById("outputField")
    outputFieldFive.textContent += "5"
}

function sixHasBeenClicked() {
    let outputFieldSix = document.getElementById("outputField")
    outputFieldSix.textContent += "6"
}

function sevenHasBeenClicked() {
    let outputFieldSeven = document.getElementById("outputField")
    outputFieldSeven.textContent += "7"
}

function eightHasBeenClicked() {
    let outputFieldEight = document.getElementById("outputField")
    outputFieldEight.textContent += "8"
}

function nineHasBeenClicked() {
    let outputFieldNine = document.getElementById("outputField")
    outputFieldNine.textContent += "9"
}

function zeroHasBeenClicked() {
    let outputFieldZero = document.getElementById("outputField")
    outputFieldZero.textContent += "0"
}

function plusHasBeenClicked() {
    let outputFieldPlus = document.getElementById("outputField")
    outputFieldPlus.textContent += "+"
}

function minusHasBeenClicked() {
    let outputFieldMinus = document.getElementById("outputField")
    outputFieldMinus.textContent += "-"
}

function divideHasBeenClicked() {
    let outputFieldDivide = document.getElementById("outputField")
    outputFieldDivide.textContent += "/"
}

function timesHasBeenClicked() {
    let outputFieldTimes = document.getElementById("outputField")
    outputFieldTimes.textContent += "*"
}


function clearOutputField() {
    let outputField = document.getElementById("outputField");
    outputField.textContent = "";
  }

function calculateSum() {
    let outputField = document.getElementById("outputField");
    let expression = outputField.textContent;
    let numbers = expression.split("+");
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += parseFloat(numbers[i]);
    }
  
    outputField.textContent = sum;
}

function appendToOutput(value) {
    let outputField = document.getElementById("outputField");
    outputField.textContent += value;
}
  
  function calculateResult() {
    let outputField = document.getElementById("outputField");
    let expression = outputField.textContent;
    let result = eval(expression);
    outputField.textContent = result;
}

