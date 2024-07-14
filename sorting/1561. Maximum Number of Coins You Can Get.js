// Challenge https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/
// Solution Reference https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4326244/c-java-python-javascript-2-approaches-explained/

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b)
    let queue = []
    piles.forEach(num => {
        queue.push(num)
    });
    
    let ans = 0;
    while (queue.length > 0) {
        queue.pop() // Alice
        ans += queue[queue.length - 1] // Us
        queue.pop()
        queue.shift() // Bob
    }
    
    return ans
};