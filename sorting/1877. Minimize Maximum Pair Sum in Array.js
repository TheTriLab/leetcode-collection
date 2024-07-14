// Challenge https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/
// Solution Reference https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4296726/more-than-one-way-detail-explanation-java-c-python-javascript-c/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b)

    let left = 0, right = nums.length - 1

    let minMaxPairSum = Number.MIN_SAFE_INTEGER

    while (left < right) {
        const currentPairSum = nums[left] + nums[right]

        minMaxPairSum = Math.max(minMaxPairSum, currentPairSum)

        left++
        right--
    }

    return minMaxPairSum
};