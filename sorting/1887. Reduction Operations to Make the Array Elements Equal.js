// Challenge https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/
// Solution Reference https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4304978/c-java-python-javascript-easiest-approach-explained/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0
    let temp = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            temp++
        }
        sum += temp
    }

    return sum
};