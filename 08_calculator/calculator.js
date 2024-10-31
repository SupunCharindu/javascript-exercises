const add = function(num1, num2) {
	let sum = 0;
  return sum = num1 + num2 ;
};

const subtract = function(num1, num2) {
	let sum = 0;
  return sum = num1 - num2 ;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(num1, num2) {
	let sum = 0;
  return sum = num1 ** num2;
};

const factorial = function(n) {
	let product = 1;
  for(let i = n; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
