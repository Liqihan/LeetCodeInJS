// /**
//  * @param {number[]} nums
//  */
// var NumArray = function(nums) {
//     this.arr = nums;
// };

// /**
//  * @param {number} i
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     return this.arr.slice(i, j + 1).reduce((total, item) => {
//         return total + item;
//     })
// };
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    this.sums.push(nums[0]);
    for (var i = 1; i < nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var num = i === 0 ? 0 : this.sums[i - 1];
    return this.sums[j] - num;
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
