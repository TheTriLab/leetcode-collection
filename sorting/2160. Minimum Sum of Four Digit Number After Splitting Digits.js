// Challenge https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/


/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const digits = JSON.stringify(num).split("")
    digits.sort()

    // The minimum sum should be composed of minimum operators
    return +digits[0]*10 + +digits[2] + +digits[1]*10 + +digits[3]
};