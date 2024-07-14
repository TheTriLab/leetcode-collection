// Challenge https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0
    arr2.sort((a, b) => a - b)

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                break
            } else if (Math.abs(arr1[i] - arr2[j]) > d && j === arr2.length - 1) {
                count++
            }
        }
    }

    return count
};