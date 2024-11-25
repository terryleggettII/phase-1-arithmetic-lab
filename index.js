let num1 = 31
let num2 = 2
function multiply(num1, num2) {
    return num1 * num2
}

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}

function mod(num3, num4) {
    return num3 % num4
}
let result = mod(13, 3);
console.log(result);

function max (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber
    } else {
        return secondNumber
    }
}
console.log(max(20,10));