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

  depth = 0;
  max = 0;

  calculateDepth(arr) {
    //     throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
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

module.exports = {
  DepthCalculator
};
