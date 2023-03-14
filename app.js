// Select elements
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const equalBtn = document.querySelector('.equal');
const operatorBtns = document.querySelectorAll('.operator');
const numBtns = document.querySelectorAll(
  '.button:not(.operator):not(.clear):not(.backspace):not(.equal)'
);


let firstNumber = null;
let currentNumber = '';
let currentOperation = null;
let previousOperationResult = null;
//let result = null;


function appendToDisplay(value) {
    if (value === '.' && currentNumber.includes('.')) {
      // If the user tries to input more than one decimal point, ignore the input
      return;
    }
  
    if (isNaN(value) && value !== '.') {
      // Operator button clicked
      if (currentOperation !== null) {
        // An operation has already been chosen, so calculate the result
        operate();
      }
      currentOperation = value;
      if (previousOperationResult !== null) {
        firstNumber = previousOperationResult;
      } else {
        firstNumber = parseFloat(currentNumber);
      }
      currentNumber = '';
    } else {
      // Digit or decimal button clicked
      currentNumber += value;
    }
    display.innerText = currentNumber;
  }




numBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      let value = event.target.dataset.value;
      appendToDisplay(value);
    });
  });
  
  operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
      let operator = button.getAttribute('data-operator');
      appendToDisplay(operator);
    });
  });