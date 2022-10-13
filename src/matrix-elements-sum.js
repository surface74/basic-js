const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  let matrix = arguments[0];
  let sum = 0;
  sum = matrix.reduce((acc, item, index) => {
    if (index === 0) {
      sum = item.reduce((acc, item) => acc + item, sum);
    }
    else {
      sum = item.reduce((acc, item, i) => (matrix[index - 1][i]) ? acc + item : acc, sum);
    }
    return sum;
  }, 0);

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
