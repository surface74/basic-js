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
function repeater(string, { repeatTimes=1, separator = "+",
  addition, additionRepeatTimes, additionSeparator="|" }) {
  const str = arguments[0];
  let options = Object.create(arguments[1]);

  if (typeof(str) !== '')
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  
  let additions = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additions.push(options.addition);
  }
  console.log('additions: ', additions);

  let mainPart = str + additions.join(options.additionSeparator);
  
  let mains = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    mains.push(mainPart);
  }
  console.log('mains: ', mains);
  console.log(mains.join(options.separator));
  console.log('options.separator: ', options.separator);
  console.log('options.additionSeparator: ', options.additionSeparator);
  
  return mains.join(options.separator);
}

repeater('STRING', {
  repeatTimes: 3, separator: '**',
  addition: 'PLUS', additionRepeatTimes: 3
});

module.exports = {
  repeater
};
