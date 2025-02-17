// Challenge https://leetcode.com/problems/happy-number/description/
// Solution Reference https://www.youtube.com/watch?v=CUoAon6Ef-g&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=4

/**
 * @param {number} n
 * @return {boolean}
 */
const getNumSum = (num) => {
    let total = 0;
    while (num !== 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        total += Math.pow(lastDigit, 2);
    }
    
    return total;
}

var isHappy = function(n) {
    let fast = n;
    let slow = n;

    while (true) {
        fast = getNumSum(getNumSum(fast));
        slow = getNumSum(slow);

        if (fast === slow) {
            return fast === 1;
        }
    }
};