/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 之前的
// var minimumTotal = function(triangle) {
//     var minTotal = function(i, j) {
//         if (i === 0 && j === 0) {
//             return triangle[0][0];
//         } else if (j === 0) {
//             return minTotal(i - 1, 0) + triangle[i][0];
//         } else if (i === j) {
//             return minTotal(i - 1, j - 1) + triangle[i][i];
//         } else {
//             return (
//                 triangle[i][j] +
//                 Math.min(minTotal(i - 1, j - 1), minTotal(i - 1, j))
//             );
//         }
//     };
//     var length = triangle.length;
//     var total = minTotal(length - 1, 0);
//     for (var j = 0; j < length; j++) {
//         var min = minTotal(length - 1, j);
//         total = min < total ? min : total;
//     }
//     return total;
// };
// 倒叙，重构数组
var minimumTotal = function(triangle) {
    var length = triangle.length;
    for (var i = length - 2; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            triangle[i][j] =
                triangle[i][j] +
                Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
