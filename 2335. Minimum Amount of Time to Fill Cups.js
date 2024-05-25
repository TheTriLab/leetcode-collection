// Challenge https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/description/
// Solution Reference https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2265901/go-python-c-java-javascript-sorting-and-filling-up-2-biggest-at-same-time-w-comments/


/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let count = 0

    amount.sort((a, b) => a - b)

    while (amount[1] && amount[2]) {
        count++
        amount[1]--
        amount[2]--
        amount.sort((a, b) => a - b)
    }

    count += amount[2]

    return count
};