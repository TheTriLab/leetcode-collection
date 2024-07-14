// Challenge https://leetcode.com/problems/custom-sort-string/description/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    return [...s].sort((a, b) => order.indexOf(a) - order.indexOf(b)).join("")
};