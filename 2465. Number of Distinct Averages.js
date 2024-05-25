// Challenge https://leetcode.com/problems/number-of-distinct-averages/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a, b) => a - b)
    let res = new Set()
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        res.add((nums[start] + nums[end])/2)
        start++
        end--
    }

    return res.size
    
};