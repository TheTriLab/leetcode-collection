// Challenge https://leetcode.com/problems/buy-two-chocolates/description/
// Solution Reference https://leetcode.com/problems/buy-two-chocolates/solutions/4427319/video-give-me-5-minutes-how-we-think-about-a-solution-bonus-codes-in-python/

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let firstMinCost = Infinity
    let secondMinCost = Infinity

    for (let p of prices) {
        if (p < firstMinCost) {
            secondMinCost = firstMinCost
            firstMinCost = p
        } else {
            secondMinCost = Math.min(secondMinCost, p)
        }
    }

    let leftover = money - (firstMinCost + secondMinCost)

    return leftover >= 0 ? leftover : money
};