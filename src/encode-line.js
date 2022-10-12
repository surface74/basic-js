const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  const str = arguments[0];
  let char = "";
  let counter = 0;
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (char !== str[i]) {
      if (counter) {
        if (counter > 1) {
          result.push(counter);
        }
        result.push(char);
      }
      counter = 1;
      char = str[i];
    }
    else {
      counter++;
    }
  }
  if (counter) {
    if (counter > 1) {
      result.push(counter);
    }
    result.push(char);
  }

  return result.join("");
}

module.exports = {
  encodeLine
};
