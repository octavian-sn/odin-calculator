// Basic mathematical operations functions.
let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

// Main operating function
function operate(a, b, c) {
    if (a === '+') {add(b, c)};
    if (a === '-') {subtract(b, c)};
    if (a === '*') {multiply(b, c)};
    if (a === '/') {divide(b, c)};
}