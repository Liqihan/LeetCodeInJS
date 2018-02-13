/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0,
        end = nums.length - 1,
        mid;
    while (start < end) {
        mid = parseInt((start + end) / 2);
        if (nums[end] > nums[mid]) {
            end = mid;
        } else if (nums[end] < nums[mid]) {
            start = mid + 1;
        } else {
            end--;
        }
    }
    return nums[end];
};
findMin([4, 5, 6, 7, 0, 1, 2]);