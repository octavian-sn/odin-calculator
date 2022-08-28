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

const backspace = document.querySelector('#delete');
backspace.addEventListener('click', backSpace);


var total = 0;
var valueOne = '';
var valueTwo = '';
var operator = '';
var control = false;

// Add numbers to operation
function useInput() {
    // Change first number 
    if (control == false || (control == true && operator === '')) {
        mainDisplay.innerText += this.innerText;
        valueOne += this.innerText;
    }
    // Change second number
    if (control == true && operator !== '') {
        mainDisplay.innerText += this.innerText;
        valueTwo += this.innerText;
    }
}

// Add operators to operation/calculate pressing operator
function useOperator() {
    // Add operator onto a previous calculated number
    if (valueOne !== '' && control === true && operator === '') {
        operator = this.innerText;
        mainDisplay.innerText = valueOne + operator;
    }
    // Calculate numbers
    if (valueOne !== '' && control === true && operator !== '' && valueTwo !== '') {
        operate(operator, valueOne, valueTwo);
        mainDisplay.innerText = total + this.innerText;
        operator = this.innerText;
        valueOne = valueOne.toString();
    }
    // Change operators
    if (valueOne !== '' && control === true && operator !== '' && valueTwo === '') {
        operator = this.innerText;
        mainDisplay.innerText = valueOne + operator;
    }
    // Add operator for the first time
    if (valueOne !== '' && control === false) {
        operator = this.innerText;
        mainDisplay.innerText += operator;
        control = true;
    } 
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
        valueOne = valueOne.toString();
    }
}

function backSpace(){
    // Delete first number decimals
    if (valueTwo === '' && operator === '') {
        one = valueOne.split('');
        one.pop();
        valueOne = one.join('');
        mainDisplay.innerText = valueOne;
        if (valueOne === '') {
            clearEverything();
        }
        if (total === 0) {control = false}
    }
    //Delete operator
    if (valueTwo === '' && operator !== '') {
        operator = '';
        control = false;
        mainDisplay.innerText = valueOne;
    }
    // Delete second number decimals
    if (valueTwo !== '' && operator !== '') {
        two = valueTwo.split('');
        two.pop()
        valueTwo = two.join('');
        mainDisplay.innerText = valueOne + operator + valueTwo;
    }
}

// console.log(`One:${valueOne}, Two:${valueTwo}, Op:${operator}, Total:${total}, Control:${control}, TypeOne:${typeof(valueOne)}`)