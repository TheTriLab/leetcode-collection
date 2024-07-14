// Challenge https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)

    const diff = arr[1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false
        }
    }

    return true
};