// Challenge https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/description/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a)

    return cost.reduce((res, cur, i) => {
            if ((i + 1) % 3 !== 0) {
                res += cur
            }

            return res
    }, 0)
};