// Select DOM elements
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const equalBtn = document.querySelector('.equal');
const operatorBtns = document.querySelectorAll('.operator');
const numBtns = document.querySelectorAll(
  '.button:not(.operator):not(.clear):not(.backspace):not(.equal)'
);

display.innerText = '0';
let firstNumber = '';
let currentNumber = '';
let currentOperation = false;
let previousOperationResult = null; // stores the previous result on operator for chained operations

// basic functions of a calculator

function add(a,b) {
  return a + b;
}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
function divide(a,b) {
  return a / b;
}

// test basic functions - in console
let a = 100;
let b = 50;
console.log(add(a,b), subtract(a,b), multiply(a,b), divide(a,b));

// create operate function

function operate() {
  if (currentOperation === null || firstNumber === null) {
    return;
  }
    let secondNumber = parseFloat(currentNumber);
    let result = '';
      
    if (previousOperationResult === null) {
      // First operation
      result = firstNumber;
    } else {
      // next operation
      firstNumber = previousOperationResult;
      result = firstNumber;
    }  

    if (currentOperation === '+') {
      result += secondNumber;
    } else if (currentOperation === '-') {
      result -= secondNumber;
    } else if (currentOperation === '*') {
      result *= secondNumber;
    } else if (currentOperation === '/') {
      if (secondNumber === 0) {
        display.innerText = 'cannot divide by 0';
        return;
      } else {
        result /= secondNumber;
      }
    }
    if (previousOperationResult === currentOperation) {
      return previousOperationResult;
    }
  // round answers with long decimals so that they don’t overflow the screen
  result = Math.round(result * 10000000000000) / 10000000000000;
  // Store the result as previous operation result
  previousOperationResult = result;
  // Update the display - for display numbers longer than 3 digits length, add commas in appropriate positions
  display.innerText = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // regex
  
  // todo: fix numbers after the decimal to NOT show commas
  
  // Reset current number and operation
  currentNumber = '';
  currentOperation = null;  
}

function appendToDisplay(value) {
  // stops the user inputting a 0 as first number - can only start with a number 1 - 9 or decimal  
  if (display.innerText === '0' && value === '0') return;  
  
  // If the user tries to input more than one decimal point, ignore the input
  if (value === '.' && currentNumber.includes('.')) {
    return;
  }
  
  if (isNaN(value) && value !== '.') {
    // Operator button clicked
    if (currentOperation == true) {
      // An operation has already been chosen, so calculate the result
      operate();
      currentOperation = true;
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
    display.innerText = currentNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

function clearDisplay() {
  // Clear the current number and operation
  firstNumber = null;
  previousOperationResult = null;
  currentNumber = '';
  currentOperation = null;
  //result = null;
  display.innerText = '0';
}

function clickEqual() {
  if (currentNumber !== '' && currentOperation !== null) {
    operate();
    currentNumber = firstNumber;
  }
}

// Function to remove the last digit from the display
function removeNumber() {
  if (currentNumber.length > 0) {
    // Remove the last character from the current number and update the display
    currentNumber = currentNumber.slice(0, -1);
    display.innerText = currentNumber;
  }
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


clearBtn.addEventListener('click', clearDisplay);

equalBtn.addEventListener('click', clickEqual);

backspaceBtn.addEventListener('click', removeNumber);


document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    //press enter
    operate();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    removeNumber();
  }
});

// night button
const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});