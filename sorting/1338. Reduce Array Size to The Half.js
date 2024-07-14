// Challenge https://leetcode.com/problems/reduce-array-size-to-the-half/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let arrMap = new Map()
    let halfLength = Math.ceil(arr.length/2)
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        arrMap.set(arr[i], (arrMap.get(arr[i]) | 0) + 1)
    }

    arrMap = new Map([...arrMap.entries()].sort((a, b) => b[1] - a[1]))
    const iteratorArrMap = arrMap.entries()

    let cur = iteratorArrMap.next().value

    while (cur && halfLength > 0) {
        halfLength -= Math.min(halfLength, cur[1])
        count++
        cur = iteratorArrMap.next().value
    }

    return count
};