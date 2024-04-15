// Challenge https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    return nums.sort((a, b) => a - b).reduce((res, cur, i) => {
        if (cur === target) {
            res.push(i)
        }

        return res
    }, [])
};