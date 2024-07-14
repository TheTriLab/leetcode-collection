// Challenge https://leetcode.com/problems/merge-similar-items/

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const allItems = [...items1, ...items2]
    const ret = new Map()

    for (const item of allItems) {
        ret.set(item[0], (ret.get(item[0]) | 0) + item[1])
    }

    return Array.from(ret).sort((a, b) => a[0] - b[0])
};