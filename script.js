// Basic mathematical operations functions.
let divide = (a, b) => a / b;

let multiply = (a, b) => a * b;

let subtract = (a, b) => a - b;

let add = (a, b) => (+(a) + +(b));

// Main operating function
function operate(a, b, c) {
    if (a === '+') {
        total = add(b, c);
        valueOne = total;
        valueTwo = ''}
    if (a === '-') {
        total = subtract(b, c);
        valueOne = total;
        valueTwo = ''}
    if (a === '*') {
        total = multiply(b, c);
        valueOne = total;
        valueTwo = ''}
    if (a === '/') {
        total = divide(b, c);
        valueOne = total;
        valueTwo = ''}
}

const mainDisplay = document.getElementById('main');

const numbers = document.querySelectorAll('.number');
numbers.forEach(item => item.addEventListener('click', useInput));

const operators = document.querySelectorAll('.operator')
operators.forEach(item => item.addEventListener('click', useOperator));

const equals = document.querySelector('.equals');
equals.addEventListener('click', equalsResult)

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearEverything);

var total = 0;
var valueOne = '';
var valueTwo = '';
var operator = '';
var control = false;

function useInput() {
    // Change first number
    if (control == false) {
        mainDisplay.innerText += this.innerText;
        valueOne += this.innerText;
    }
    // Change second number while having the first one
    if (control == true && total !== 0) {
        mainDisplay.innerText += this.innerText;
        valueTwo += this.innerText;
    }
    // Change second number
    if (control == true && total === 0) {
        mainDisplay.innerText += this.innerText;
        valueTwo += this.innerText;
    }
    console.log(`One:${valueOne}, Two:${valueTwo}, Op:${operator}`);
}

function useOperator() {
    // Add operator on a previous calculated number
    if (control === true && operator === '') {
        operator = this.innerText;
        mainDisplay.innerText = valueOne + operator;
    }
    // Calculate numbers
    if (control === true && operator !== '' && valueTwo !== '') {
        operate(operator, valueOne, valueTwo);
        mainDisplay.innerText = total + this.innerText;
        operator = this.innerText;
    }
    // Change operators while having first number
    if (control === true && operator !== '' && valueTwo === '') {
        operator = this.innerText;
        mainDisplay.innerText = valueOne + operator;
    }
    // Add operator for the first time
    if (control === false) {
        operator = this.innerText;
        mainDisplay.innerText += operator;
        control = true;
    } 
    console.log(`One:${valueOne}, Two:${valueTwo}, Op:${operator}`);
}

function clearEverything(){
    total = 0;
    valueOne = '';
    valueTwo = '';
    operator = '';
    control = false;
    mainDisplay.innerText = '';
}

function equalsResult(){
    if (control === true && operator !== '' && valueTwo !== '') {
        operate(operator, valueOne, valueTwo);
        mainDisplay.innerText = total;
        operator = '';
    }
}