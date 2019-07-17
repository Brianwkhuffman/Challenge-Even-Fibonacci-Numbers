/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 0;
  let a = 1;
  let b = 0;
  let temp;
  while (maxFibValue > a) {
    temp = a;
    a = a + b;
    b = temp;
    if (a % 2 === 0) {
      sum = sum + a;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;

  //define your base case, validate your input
  let a = 1;
  let b = 0;
  let temp;
  while (maxFibValue > a) {
    temp = a;
    a = a + b;
    b = temp;
    highest = b;
  }
  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
