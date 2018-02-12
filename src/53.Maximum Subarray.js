/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var result = [];
    var length = nums.length;
    result.push(nums[0]);
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        result[i] = nums[i] + ( result[i-1] > 0 ? result[i-1] : 0);
        max = Math.max(result[i], max);
    }
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));