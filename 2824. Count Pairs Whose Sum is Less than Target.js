// Challenge https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

// Solution 01: Brute Force

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++
            }
        }
    }

    return count
};

// Solution 02: Two pointers
// Solution Reference: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/3933451/two-pointers-approach-easy-to-understand-in-9-languages/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b) => a - b)

    let count = 0
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            // All pairs with (left, from (left to right)) satisfied the condition
            count += right - left
            left++
        } else {
            right--
        }
    }

    return count
};