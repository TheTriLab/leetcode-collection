// Challenge https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b)
    salary.pop()
    salary.shift()

    return salary.reduce((res, cur) => {
        res += cur
        return res
    }, 0) / salary.length
};