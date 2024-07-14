// Challenge https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/description/
// Solution Reference https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/4808515/js-solution-by-bharadwaj/

/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    coins.sort((a, b) => a - b)
    let count = 0
    for (let coin of coins) {
        if (coin <= count + 1) {
            count += coin
        }
    }
    return count + 1
};