const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.max = 0;
    this.counter = 0;
  }

  calculateDepth(arr) {
    console.log('this.counter: ', this.counter);

    ++this.depth;
    this.max = Math.max(this.depth, this.max);
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.depth = this.calculateDepth(item);
        this.max = Math.max(this.max, this.depth);
      }
    });
    return (this.depth === 1) ? this.max : --this.depth;
  }
}

// const depthCalc = new DepthCalculator();
// let arr = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];
// console.log(depthCalc.calculateDepth(arr));

// const instance = new DepthCalculator();
// const calculateDepth = instance.calculateDepth.bind(instance);
// console.log(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));

module.exports = {
  DepthCalculator
};
