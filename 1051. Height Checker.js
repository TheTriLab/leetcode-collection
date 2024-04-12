// Challenge https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let wrongPosCount = 0
    const orderedHeights = [...heights].sort((a, b) => a - b)

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== orderedHeights[i]) {
            wrongPosCount++
        }
    }
    
    return wrongPosCount
};