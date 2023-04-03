// Get the HTML elements from the DOM
const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const tipCustom = document.getElementById("tip-custom");
const resetBtn = document.querySelector(".reset");
const error =document.querySelector(".error");

//log the input elembets to the console
console.log(billInput)
console.log(peopleInput)
console.log(tipPerPerson)
console.log(totalPerPerson)

// Add event listeners to the input elements and buttons
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val){
    val.addEventListener('click', handleClick);
});

tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener('click', reset);

// Set initial values for the input elements and result displays
billInput.value = "0.00"; 
peopleInput.value ="1"; 
tipPerPerson.innerHTML="£" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "£" + (0.0).toFixed(2);

// Declare and initialize variables
let billValue = 0.0; //store bill amount
let peopleValue = 1; //store number of people
let tipValue = 0.15; // store tip percentage (default is 15%)

// Event handler functions for input elements
function billInputFun(){
    billValue = parseFloat(billInput.value);
    calculateTip();
}
//// Event handler function for number of people input field
function peopleInputFun(){
    peopleValue= parseFloat(peopleInput.value)
    
    if(peopleValue < 1 ){
        error.style.display ="flex";
        peopleInput.style.border = "thick sold red";
    } else{
        error.style.display ="none";
        peopleInput.style.border = "none";
        calculateTip();

    }
}
// Event handler function for custom tip percentage input field
function tipInputFun(){
    tipValue = parseFloat(tipCustom.values /100);
    tips.forEach(function(val){
        val.classList.remove("active-tip");
    });
    calculateTip();
}

// Event handler function for the tip percentage buttons
function handleClick(event) {
    tips.forEach(function (val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}
// Function that calculates and displays the tip and total amounts
function calculateTip(){
    if(peopleValue >=1){
        let tipAmount =(billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "£" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML ="£" + total.toFixed(2);
    }
}
// Function that resets the input values and result displays to their initial states
function reset(){
    billInput.value = "0.00";
    billInputFun();
    peopleInput.value ="1";
    peopleInputFun();
    tipCustom.value = "";
  

}


//what is wrong with my code gwahfhvIffJ
// THE INPUT FOR THE MONEY IS WORKING
//THE INPUT FOR THE PEOPLE IS WORKING 
// THE RESET BUTTON IS WORKIN

//MY TIP % IS NOT WOKRING
// THE BUTTIN THAT IS BEING CLICK IS NOT STAYING CLICK for the tips
//THE CUSTOM-tip BUTTON IS NOT WORKING