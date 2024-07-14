// Challenge https://leetcode.com/problems/mean-of-array-after-removing-some-elements/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b)
    const removeElNum = arr.length * 0.05
    let sum = 0

    for (let i = removeElNum; i < arr.length - removeElNum; i++) {
        sum += arr[i]
    }

    return sum/(arr.length - removeElNum * 2)
};