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