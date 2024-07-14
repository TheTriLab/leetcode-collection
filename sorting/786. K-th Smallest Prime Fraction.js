// Challenge https://leetcode.com/problems/k-th-smallest-prime-fraction/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const temp = []

    let i = 0
    let j = arr.length - 1

    while (i < arr.length - 1) {
        temp.push([arr[i], arr[j]])

        if (i !== j - 1) {
            j--
        } else {
            i++
            j = arr.length - 1
        }
    }

    // a/b < c/d if ad < bc
    temp.sort((a, b) => a[0]*b[1] - a[1]*b[0])

    return temp[k - 1]
};