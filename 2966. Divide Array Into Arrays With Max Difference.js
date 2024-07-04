// Challenge https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4658820/javascript-professional-approach-and-in-depth-explanation/
// Solution Reference https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b)

    let result = []

    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) {
            return []
        }

        result.push([nums[i - 2], nums[i - 1], nums[i]])
    }

    return result
};