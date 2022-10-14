const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  const date = arguments[0];
  switch (date.getMonth()) {
    case 1:
    case 2:
    case 12:
      return 'winter';
    case 3:
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 9:
      return 'summer';
    default:
      return 'fall';
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(new Date(2020, 02, 31)));