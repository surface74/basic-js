const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  let map = new Map();
  let domains = arguments[0];

  for (let i = 0; i < domains.length; i++) {
    let parts = domains[i].split(".").reverse().map(i => "." + i);
    for (let j = 0; j < parts.length; j++) {
      let part = parts.slice(0, j + 1).join("");
      if (map.has(part)) {
        map.set(part, map.get(part) + 1);
      }
      else {
        map.set(part, 1);
      }
    }
  }
  return Object.fromEntries(map.entries());
}

// const domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];
// // getDNSStats(domains);
// console.log('getDNSStats(domains): ', getDNSStats(domains));

module.exports = {
  getDNSStats
};
