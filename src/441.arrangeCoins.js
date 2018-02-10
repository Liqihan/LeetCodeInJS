/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var i = 1;
    function getTotal(n) {
        return n * (n + 1) / 2;
    }
    while(getTotal(i) <= n) {
        i++;
    }
    return i -1;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(6));