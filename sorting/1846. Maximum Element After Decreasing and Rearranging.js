// Challenge https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/description/
// Solution Reference https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/5067998/video-give-me-5-minutes-how-we-think-about-a-solution/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b)
    let maxVal = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal += 1
        }
    }

    return maxVal
};