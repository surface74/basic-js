const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  let arg1 = arguments[0].split("");
  let arg2 = arguments[1].split("");
  let count = 0;
  arg1.forEach(char => {
    let index = arg2.indexOf(char);
    if (~index) {
      count++;
      arg2.splice(index,1);
      if (!arg2.length) {
        return count;
      }
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
