const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
 *
 */
function repeater(string, { repeatTimes, separator,
  addition, additionRepeatTimes, additionSeparator }) {
  let str = (arguments[0] === null) ? "null" : arguments[0] + "";
  let options = Object.create(arguments[1]);

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || "+";
  if (options.addition === null) {
    options.addition = "null";
  }
  else if (options.addition !== undefined) {
    options.addition = options.addition + "";
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.additionSeparator = options.additionSeparator || "|";
  }

  let mainPart = str;
  if (options.addition) {
    let additions = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additions.push(options.addition);
    }
    mainPart += additions.join(options.additionSeparator);
  }

  let mains = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    mains.push(mainPart);
  }

  return mains.join(options.separator);
}

module.exports = {
  repeater
};
