// Challenge https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let result = []
    const totalSum = nums.reduce((res, cur) => {
        res += cur

        return res
    }, 0)

    nums.sort((a, b) => b - a)
    let i = 0
    let resultSum = 0
   
    while (totalSum - resultSum >= resultSum) {
        result.push(nums[i])
        resultSum += nums[i]
        i++
    }

    return result
};