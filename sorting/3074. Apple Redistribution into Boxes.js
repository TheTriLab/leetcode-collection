// Challenge https://leetcode.com/problems/apple-redistribution-into-boxes/description/
// Solution Reference https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4851321/beats-100-java-c-python-javascript-easy-solution/

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a, b) => a - b)
    
    let sum = apple.reduce((acc, curr) => acc + curr, 0);

    let ans = 0
    for (let i = capacity.length - 1; i >= 0; i--) {
        ans++
        sum -= capacity[i]
        if (sum <= 0) break
    }
    return ans
};