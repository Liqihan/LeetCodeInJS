/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (var i = 0; i * i <= c; i++) {
        var b = Math.sqrt(c - i * i);
        if (b === parseInt(b)) {
            return true;
        }
    }
    return false;
};
console.log(judgeSquareSum(5));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(0));