// 448. Find All Numbers Disappeared in an Array
// 思路：对于每个数字nums[i]，如果其对应的nums[nums[i] - 1]是正数，我们就赋值为其相反数，如果已经是负数了，就不变了，那么最后我们只要把留下的整数对应的位置加入结果res中即可
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var idx = Math.abs(nums[i]) -1;
        nums[idx] = nums[idx] > 0 ? -nums[idx] : nums[idx];
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
