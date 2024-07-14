// Challenge https://leetcode.com/problems/check-if-array-is-good/description/
// Solution Reference https://leetcode.com/problems/check-if-array-is-good/solutions/3802812/javascript-direct-way-80ms/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length, v = 1
    if (nums[n - 1] != nums[n - 2]) return false
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] != v++) return false
    }
    return true
};