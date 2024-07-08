// Challenge https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
// Solution Reference https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/2506908/easy-to-understand-javascript-solution/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    const sortedNums = nums.sort((a,b) => a-b)
    let lowestPos = 0
    for (let i = 0; i < k; i++) {
        if (sortedNums[i] < sortedNums[lowestPos]) lowestPos = i
        sortedNums[i] < 0 ? sortedNums[i] = -sortedNums[i] : sortedNums[lowestPos] = -sortedNums[lowestPos]
    }
    return sortedNums.reduce((a,b) => a + b)
};