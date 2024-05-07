// Challenge https://leetcode.com/problems/missing-number/description/
// Solution Reference https://leetcode.com/problems/missing-number/solutions/5121062/video-using-index-numbers/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
            res += i - nums[i];
    }

    return res
};