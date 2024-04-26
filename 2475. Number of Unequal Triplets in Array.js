// Challenge https://leetcode.com/problems/number-of-unequal-triplets-in-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = j + 1; z < nums.length; z++) {
                if (nums[i] !== nums[j] && nums[i] !== nums[z] && nums[j] !== nums[z]) {
                    count++
                }
            }
        }
    }

    return count
};