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
const stringDisplay = document.getElementById('string');

const numbers = document.querySelectorAll('.number');
numbers.forEach(item => item.addEventListener('click', useInput));

const operators = document.querySelectorAll('.operator')
operators.forEach(item => item.addEventListener('click', useOperator));

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
    // Add operator while having the first number
    if (control === true && operator === '') {
        operator = this.innerText;
        mainDisplay.innerText = operator;
        stringDisplay.innerText = operator;
    }
    // Operate numbers
    if (control === true && operator !== '') {
        operate(operator, valueOne, valueTwo);
        stringDisplay.innerText = total
        mainDisplay.innerText = total + this.innerText;
        operator = '';
    }
    // Switching to second number
    if (control === false) {
        mainDisplay.innerText += this.innerText;
        operator = this.innerText;
        control = true;
    }
}