// Challenge https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let sum = nums.shift()

    nums.sort((a, b) => a - b)
    
    return sum + nums[0] + nums[1]
    
};