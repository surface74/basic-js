const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  if (!Array.isArray(arguments[0])) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";
  const DISCARD_PREV = "--discard-prev";
  const DISCARD_NEXT = "--discard-next";
  const arr = [...arguments[0]];

  const result = [];
  const discardeds = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    switch (item) {
      case DISCARD_PREV:
        if (i > 0 && result.length > 0 && !discardeds.includes(i - 1)) {
          result.pop();
        }
        break;
      case DOUBLE_NEXT:
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case DOUBLE_PREV:
        if (i > 0 && !discardeds.includes(i - 1)) {
          result.push(arr[i - 1]);
        }
        break;
      case DISCARD_NEXT:
        if (i < arr.length - 1) {
          discardeds.push(++i);
        }
        break;
      default:
        result.push(arr[i]);

    }
  }
  return result;
}

module.exports = {
  transform
};
