/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dep = [];
    if (n === 0) {
        return 0;
    }
    dep.push(0);
    for (var i = 1; i <= n; i++) {
        var j = 1;
        var min = i;
        while (i - j * j >= 0) {
            min = Math.min(min, dep[i - j * j] + 1);
            j++;
        }
        dep[i] = min;
    }
    return dep[n];
};
// var numSquares = function(n) {
//     return test(n);
//     function test(num) {
//         if (num === 0) {
//             return 0;
//         }
//         var a = Math.floor(Math.sqrt(num));
//         if (a * a === num) {
//             return 1;
//         }
//         var arr = [];
//         for (var i = a; i >= 1; i--) {
//             arr.push(1 + test(num - i * i));
//         }
//         return Math.min.apply(Math, arr);
//     }
// };
console.log(numSquares(1));
console.log(numSquares(5));
console.log(numSquares(12));
console.log(numSquares(58));

