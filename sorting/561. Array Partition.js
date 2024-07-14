// Challenge https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0
    nums.sort((a,b) => b - a)

    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i + 1]
    }
    
    return sum
};