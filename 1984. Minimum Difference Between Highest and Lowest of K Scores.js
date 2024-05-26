// Challenge https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let dif = Infinity
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const tempDif = nums[i + k - 1] - nums[i]
        if (tempDif < dif) {
            dif = tempDif
        }
    }

    return dif
};