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
  calculateDepth(arr, depth = 1) {
        throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    arr.forEach(item => {  
      if (Array.isArray(item)) {
        console.log(`enter [${item}]:`, depth);
        depth = this.calculateDepth(item, ++depth);
        console.log(`exit [${item}]: `, depth);
      }
    });
    return depth;
  }
}

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, [2],[5], 1]));


module.exports = {
  DepthCalculator
};
