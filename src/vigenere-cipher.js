const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this._direction = direction;
  }

  encrypt() {
    if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let text = arguments[0].toUpperCase();
    let key = arguments[1].repeat(Math.ceil(text.length / arguments[1].length)).slice(0, text.length).toUpperCase();
    let enc = [];
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let textCharCode = text.codePointAt(i);
      if (textCharCode >= 65 && textCharCode <= 90) {
        char = String.fromCodePoint(65 + (textCharCode + key.codePointAt(keyIndex++) - 130) % 26);
      }
      enc.push(char);

    }
    return this._direction ? enc.join("") : enc.reverse().join("");
  }

  decrypt() {
    if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let text = arguments[0].toUpperCase();
    let key = arguments[1].repeat(Math.ceil(text.length / arguments[1].length)).slice(0, text.length).toUpperCase();
    let decr = [];
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let textCharCode = text.codePointAt(i);
      if (textCharCode >= 65 && textCharCode <= 90) {
        let diff = textCharCode - key.codePointAt(keyIndex++);
        char = String.fromCodePoint(65 + (diff < 0 ? 26 + diff : diff));
      }
      decr.push(char);
    }
    return this._direction ? decr.join("") : decr.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
