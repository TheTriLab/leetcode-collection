// Challenge https://leetcode.com/problems/maximum-ice-cream-bars/description/
// Solution Reference https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005918/easy-greedy-approach-c-javascript-and-java/

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => {
        return a-b
    });

    let ans= 0
    for(let i=0; i<costs.length; i++)
    {
        if(coins>=costs[i]) {
            coins-=costs[i]
            ans++
        } else {
            break
        }
    }
    return ans
};