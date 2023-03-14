<<<<<<< Updated upstream
// The assignment - create a basic calculator

// Task 1: create the functions for the following operators - test each in the browser console:

// example values:
let a = 100;
let b = 50;
// add ( + ) 
function add() {
    return a + b;     
}
// subtract ( - )
function subtract() {
    return a - b;   
}
// multiply ( * )
function multiply() {
    return a * b;    
}
// divide ( / )
function divide() {
    return a / b;    
}
// example output
console.log(`${add(a,b)}, ${subtract(a,b)}, ${multiply(a,b)}, ${divide(a,b)})`)

// Task 2:
// create a new function operate()
// this should take an operator and 2 numbers
// then calls one of the above functions
function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };

// Task 3:
// create a basic HTML calculator with buttons for each digit, the operator functions and the "equals" ( = ) key
// there should be a display output for the calculator
// Add a "clear" ( AC ) button (stands for All Clear)
// Add a CE button to erase the last number or operation entered (stands for Clear Entry)

// Task 4:
// create the functions that populate the display when clicking on buttons. Store the 'display value' in a variable for use in the next step.

// Task 5:
// make the calculator work! Store the first number that is input into the calculator when a user presses and operator, then also save the operation chosen. Call the operate() when the user presses ( = ):
    // a. Once operate() has been called, update the display with the "solution".
    // b. Figure out how to store all the values and call the operate function with them.

=======
class Calculator {
    constructor(PREVIOUS_VALUE, CURRENT_VALUE) {
      PREVIOUS_VALUE = PREVIOUS_VALUE;
      CURRENT_VALUE = CURRENT_VALUE;
      clear();
    }
  
    clear() {
      CURRENT_VALUE = '';
      PREVIOUS_VALUE = '';
      OPERATOR_BTN = undefined;
    }
  
    delete() {
      CURRENT_VALUE = CURRENT_VALUE.toString().slice(0, -1);
    }
  
    appendNumberValue(NUMBER_BTN) {
      if (NUMBER_BTN === '.' && CURRENT_VALUE.includes('.')) return;
      CURRENT_VALUE = CURRENT_VALUE.toString() + NUMBER_BTN.toString();
    }
  
    chooseOperator(OPERATOR_BTN) {
      if (CURRENT_VALUE === '') return;
      if (PREVIOUS_VALUE !== '') {
        calculate();
      }
      OPERATOR_BTN = OPERATOR_BTN;
      PREVIOUS_VALUE = CURRENT_VALUE;
      CURRENT_VALUE = '';
    }
  
    calculate() {
      let result;
      const prev = parseFloat(PREVIOUS_VALUE);
      const current = parseFloat(CURRENT_VALUE);
      if (isNaN(prev) || isNaN(current)) return;
      switch (OPERATOR_BTN) {
        case '+':
          result = prev + current;
          break;
        case '-':
            result = prev - current;
          break;
        case '*':
            result = prev * current;
          break;
        case '÷':
            result = prev / current;
          break;
        default:
          return;
      }
      CURRENT_VALUE = result;
      OPERATOR_BTN = undefined;
      PREVIOUS_VALUE = '';
    }
  
    getDisplayNumber(numberDisplay) {
      const stringNumber = numberDisplay.toString();
      const numberDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];

      if (isNaN(numberDigits)) {
        numberDisplay = '';
      } else {
        numberDisplay = numberDigits.toLocaleString('en', { maximumFractionDigits: 0 });
      }
      if (decimalDigits != null) {
        return `${numberDisplay}.${decimalDigits}`;
      } else {
        return numberDisplay;
      }
    }
  
    updateOutputValue() {
      CURRENT_VALUE.innerText =
        getDisplayNumber(CURRENT_VALUE);
      if (OPERATOR_BTN != null) {
        PREVIOUS_VALUE.innerText =
          `${getDisplayNumber(PREVIOUS_VALUE)} ${OPERATOR_BTN}`;
      } else {
        PREVIOUS_VALUE.innerText = '';
      }
    }
  }
    
  const NUMBER_BTN = document.querySelectorAll('number-btn');
  const OPERATOR_BTN = document.querySelectorAll('operator-btn');
  const EQUALS_BTN = document.querySelector('equals-btn');
  const DELETE_BTN = document.querySelector('delete-btn');
  const CLEAR_ALL_BTN = document.querySelector('clear-btn');
  const PREVIOUS_VALUE = document.querySelector('previous-value');
  const CURRENT_VALUE = document.querySelector('current-value');
  
  const calculator = new Calculator(PREVIOUS_VALUE, CURRENT_VALUE);
  
  NUMBER_BTN.forEach(NUMBER_BTN => {
    NUMBER_BTN.addEventListener('click', () => {
      calculator.appendNumberValue(NUMBER_BTN.innerText);
      calculator.updateOutputValue();
    });
  });
  
  OPERATOR_BTN.forEach(OPERATOR_BTN => {
    OPERATOR_BTN.addEventListener('click', () => {
      calculator.chooseOperation(OPERATOR_BTN.innerText)
      calculator.updateOutputValue()
    });
  });
  
  EQUALS_BTN.addEventListener('click', EQUALS_BTN => {
    calculator.calculate();
    calculator.updateOutputValue();
  });
  
  CLEAR_ALL_BTN.addEventListener('click', CLEAR_ALL_BTN => {
    calculator.clear();
    calculator.updateOutputValue();
  });
  
  DELETE_BTN.addEventListener('click', DELETE_BTN => {
    calculator.delete();
    calculator.updateOutputValue();
  });
>>>>>>> Stashed changes
