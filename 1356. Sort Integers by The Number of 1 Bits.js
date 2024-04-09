// Challenge https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.map(e => ({
        num: e,
        binCount: Number(e).toString(2).split('').filter(cur => +cur === 1).length
    })).sort(
        (a,b) => (a.binCount - b.binCount) || a.num - b.num
    ).map(e => e.num)
};