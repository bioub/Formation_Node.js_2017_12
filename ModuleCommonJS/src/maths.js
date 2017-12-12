// (function (exports = {}, require, module, __filename, __dirname) {

const convertToNumber = Number;
const sum = (a, b) => convertToNumber(a) + convertToNumber(b);
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {
  sum,
  substract,
  multiply,
  divide,
}

// });

