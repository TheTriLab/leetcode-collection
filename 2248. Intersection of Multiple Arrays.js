// Challenge https://leetcode.com/problems/intersection-of-multiple-arrays/description/
// Solution Reference https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/1982697/short-javascript-solution-using-a-set-object/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    if (nums.length === 1) {
        return nums[0].sort((a, b) => a - b)
    }
	
    let initSet = new Set(nums[0])

    for (let i = 1; i < nums.length; i++) {
        initSet = new Set([...nums[i]].filter(x => initSet.has(x)))
    }
	
    return Array.from(initSet).sort((a, b) => a - b)
};