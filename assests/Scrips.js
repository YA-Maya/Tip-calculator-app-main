// Get the HTML elements from the DOM
const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tipCustom = document.getElementById("tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");
const tipButtons = document.querySelectorAll(".button");

// Set initial values for the input elements and result displays
billInput.value = "0.00"; 
peopleInput.value = "1"; 
tipPerPerson.innerHTML = "£" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "£" + (0.0).toFixed(2);

// Declare and initialize variables
let billValue = 0.0; //store bill amount
let peopleValue = "1"; //store number of people
let tipValue = 0.15; //store tip percentage (default is 15%)
let tipAmount;

// Event handler functions for input elements
function billInputFun() {
  billValue = parseFloat(billInput.value);
  console.log(billValue);
  peopleValue = parseFloat(peopleInput.value);
  if (peopleValue <= 0) {
    error.innerHTML = 'number must be greater than zero';
    setTimeout(function () {
      error.innerHTML = '';
    }, 2000);
  }
  calculateTip();
}

function handleClick(event) {
  tipButtons.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function tipCustomVal() {
  let customTipValue = parseFloat(tipCustom.value);
  if (!isNaN(customTipValue)) {
    tipValue = customTipValue / 100;
    tipButtons.forEach((btn) => {
      btn.classList.remove('active-tip');
    });
    calculateTip();
  }
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "£" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "£" + total.toFixed(2);
    console.log(billValue);
    console.log(tipAmount);
  }
}

// Event listeners
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", billInputFun);
tipButtons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', tipCustomVal);
resetBtn.addEventListener('click', reset);

// Function that resets the input values and result displays to their initial states
function reset(){
    billInput.value = "0.00";
    peopleInput.value ="1";
    tipCustom.value = "";
    tipCustom.value = "";
    billInputFun();
    tipCustomVal();
};