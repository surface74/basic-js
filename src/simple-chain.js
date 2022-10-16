const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(/* value */) {
    if (arguments.length > 0) {
      this.chain.push(`( ${arguments[0]===null ? "null" :arguments[0].toString()} )`);
    }
    else {
      this.chain.push(`( )`);
    }
    return this;
  },
  removeLink(/* position */) {
    if (!Number.isInteger(arguments[0]) || arguments[0] < 1 || arguments[0] > this.getLength()) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(arguments[0] - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
