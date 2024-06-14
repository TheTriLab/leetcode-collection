// Challenge https://leetcode.com/problems/find-the-value-of-the-partition/description/
// Solution Reference https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650585/simple-js-solution-o-n-log-n/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((a,b) => a-b)
    let res = Infinity
    
    for (let i=0; i<nums.length-1; i++) {
        const diff = Math.abs(nums[i] - nums[i+1])
        if (diff < res) {
            res = diff
        }
    }
    
    return res
};