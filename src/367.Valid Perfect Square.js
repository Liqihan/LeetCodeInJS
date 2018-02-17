/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var result = Math.sqrt(num);
    return parseInt(result) === result;
};
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(16))