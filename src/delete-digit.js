const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let digits = arguments[0].toString().split("");
  let max = 0;
  digits.forEach((item, index) => {
    let test = [...digits];
    test.splice(index, 1);
    const nextNumber = +test.join("");
    if (max < nextNumber) {
      max = nextNumber;
    }
  });
  return max;
}

module.exports = {
  deleteDigit
};
