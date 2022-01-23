function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    return operation(arg1, arg2);
}

alert(mathOperation(2, 5, sum));