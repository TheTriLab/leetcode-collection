// Challenge https://leetcode.com/problems/rank-transform-of-an-array/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b)
    const arrMap = new Map()
    let count = 1
    
    for (let i = 0; i < sortedArr.length; i++) {
        arrMap.set(sortedArr[i], (arrMap.get(sortedArr[i]) ?? count++))
    }

    return arr.map((e) => arrMap.get(e))
};