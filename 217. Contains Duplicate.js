// Challenge https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set(nums)

    return numSet.size !== nums.length
};