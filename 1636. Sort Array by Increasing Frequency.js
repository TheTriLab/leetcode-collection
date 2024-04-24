// Challenge https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const numsMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i],  (numsMap.has(nums[i]) ? numsMap.get(nums[i]) : 0) + 1)
    }

    return [...numsMap.entries()].sort((a, b) => (a[1] - b[1]) || (b[0] - a[0])).reduce((res, cur) => {
        for (let i = 0; i < cur[1]; i++) {
            res.push(cur[0])
        }

        return res
    }, [])
};