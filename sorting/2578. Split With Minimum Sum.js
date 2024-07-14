// Challenge https://leetcode.com/problems/split-with-minimum-sum/description/

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let num1 = 0
    let num2 = 0

    const arr = num.toString().split('').map(Number).sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i += 2) {
        num1 = arr[i] ? (num1 * 10 + arr[i]) : num1
        num2 = arr[i + 1] ? (num2 * 10 + arr[i + 1]) : num2
    }

    return num1 + num2
};