// Challenge https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numMap = new Map()
    let res = []

    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1)
    }

    let sortedMap = [...numMap].sort((a, b) => b[1] - a[1])

    for (let i = 0; i < k; i++) {
        res.push(sortedMap[i][0])
    }

    return res
};