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

