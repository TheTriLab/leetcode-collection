// Challenge https://leetcode.com/problems/largest-perimeter-triangle/description/
// Solution Reference https://leetcode.com/problems/largest-perimeter-triangle/solutions/2692688/js-with-explanation-easy-to-understand-simple/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a)
    const length = nums.length - 2
    for (let i = 0; i < length; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]
        }
    }
    return 0
};