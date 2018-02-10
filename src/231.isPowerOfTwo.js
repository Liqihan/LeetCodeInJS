/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }
    function isInteger(obj) {
        return (obj | 0) === obj;
    }
    var result = n;
    while (result !== 1 && isInteger(result)) {
        result = result / 2;
    }
    return result === 1 ? true : false;
};
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(17));
// console.log(isPowerOfTwo(1));
