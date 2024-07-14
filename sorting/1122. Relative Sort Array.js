// Challenge https://leetcode.com/problems/relative-sort-array/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const arr2Map = arr2.reduce((res, cur, i) => {
        res.set(cur, i)
        return res
    }, new Map())

    // arr1.length here just ensure it surpasses the previous indices of ordered numbers that have in arr2
    arr1.sort((a, b) => (arr2Map.get(a) ?? arr1.length + a) - (arr2Map.get(b) ?? arr1.length + b))

    return arr1
};