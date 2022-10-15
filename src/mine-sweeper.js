const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {

  let matrix = arguments[0];
  let result = [];

  const ROW_NUM = matrix.length;
  const COL_NUM = matrix[0].length;

  for (let row = 0; row < matrix.length; row++) {
    let line = [...matrix[row]];
    result.push([...line]);

    for (let col = 0; col < line.length; col++) {
      let mines = 0;

      if (row > 0 && col > 0) { mines += +matrix[row - 1][col - 1]; }
      if (row > 0) { mines += +matrix[row - 1][col]; }
      if (row > 0 && col < COL_NUM - 1) { mines += +matrix[row - 1][col + 1]; }

      if (col > 0) { mines += +matrix[row][col - 1]; }
      if (col > 0 && row < ROW_NUM - 1) { mines += +matrix[row + 1][col - 1]; }

      if (row < ROW_NUM - 1) { mines += +matrix[row + 1][col]; }
      if (row < ROW_NUM - 1 && col < COL_NUM - 1) { mines += +matrix[row + 1][col + 1]; }
      if (col < COL_NUM - 1) { mines += +matrix[row][col + 1]; }

      result[row][col] = mines;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
