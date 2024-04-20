// Challenge https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let numSet = new Set(nums)
    return numSet.has(0) ? numSet.size - 1 : numSet.size
};