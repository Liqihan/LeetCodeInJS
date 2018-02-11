/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    var direction = 1;
    var row = matrix.length;
    var result = [];
    if (row === 0) {
        return result;
    }
    var column = matrix[0].length;
    var i = 0,
        j = 0;
    while (i < row && j < column) {
        result.push(matrix[i][j]);
        if (direction === 1 && j === column - 1) {
            direction =  -1;
            i++;
            continue;
        } else if (direction === -1 && i === row - 1) {
            direction = 1;
            j++;
        } else if (direction === 1 && i === 0) {
            direction = -1;
            j++;
            continue;
        } else if (direction === -1 && j === 0) {
            direction = 1;
            i++;
            continue;
        }  else {
            i -= direction;
            j += direction;
        }
    }
    return result;
};
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
