/**
 * @param {number[]} nums
 * @return {number}
 * @description 构造成对象
 */
var longestConsecutive = function(nums) {
    var res = 0;
    var length = nums.length;
    var map = {};
    for (var i = 0; i < length; i++) {
        // 如果不存在
        var number = nums[i];
        if (!map[number]) {
            var left = map[number - 1] ? map[number - 1] : 0;
            var right = map[number + 1] ? map[number + 1] : 0;
            var sum = left + right + 1;
            map[number] = sum;
            res = Math.max(res, sum);
            map[number - left] = sum;
            map[number + right] = sum;
        }
    }
    return res;
};

console.log(longestConsecutive([-3,2,8,5,1,7,-8,2,-8,-4,-1,6,-6,9,6,0,-7,4,5,-4,8,2,0,-2,-6,9,-4,-1]));
// console.log(longestConsecutive([100, -3,4, 200, 1, 3, 2, 0,-1, -2]))
