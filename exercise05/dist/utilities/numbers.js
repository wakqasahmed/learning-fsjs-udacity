"use strict";
// multiply
var multiply = function (num1, num2) {
    return num1 * num2;
};
// add
var sum = function (num1, num2) {
    return num1 + num2;
};
// divide
var divide = function (num1, num2) {
    return num1 / num2;
};
// subtract
var subtract = function (num1, num2) {
    return num1 - num2;
};
// square
var square = function (num) {
    return num * num;
};
module.exports = {
    multiply: multiply,
    subtract: subtract,
    divide: divide,
    sum: sum,
    square: square
};
