// Challenge https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    
    nums.sort((a, b) => b - a)

    while (original <= nums[0] && nums.includes(original)) {
        original *= 2
    }

    return original
};