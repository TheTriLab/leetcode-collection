// Challenge https://leetcode.com/problems/neither-minimum-nor-maximum/


// Solution 01: Sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length <= 2) {
        return -1
    }

    nums.sort((a, b) => a - b)

    return nums[1]
};


// Solution 02: Just pick 3 numbers because all numbers are distinct and just return any matching number

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length <= 2) {
        return -1
    }

    const a = nums[0]
    const b = nums[1]
    const c = nums[2]

    if (((a < b) && (a > c)) || ((a > b) && (a < c))) {
        return a
    } else if (((b < a) && (b > c)) || ((b > a) && (b < c))) {
        return b
    } else {
        return c
    }
};