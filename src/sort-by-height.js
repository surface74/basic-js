const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  const input = Array.from(arguments[0]);

  const toSort = input.filter(item => item !== -1).sort((a, b) => b - a);
  input.forEach((item, index) => {
    if (item !== -1) { input[index] = toSort.pop(); }
  });
  return input;
}

module.exports = {
  sortByHeight
};
