// Challenge https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b)
    let averages = []
    let i = 0
    
    while (i < j) {
        averages.push((nums[i] + nums[j]) / 2)

        i++
        j--
    }

    averages.sort((a, b) => a - b)

    return averages[0]
};