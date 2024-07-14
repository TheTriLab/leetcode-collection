// Challenge https://leetcode.com/problems/sort-integers-by-the-power-value/description/
// Solution Reference https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/3017596/straight-forward-solution/

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const memo = {}

    const dp = Array(hi - lo)
    for (i = lo; i <= hi; i++) dp[hi - i] = [i, transform(i)]
    dp.sort((a, b) => a[1] - b[1] || a[0] - b[0])

    function transform(x) {
        if (x in memo) return memo[x]
        let ans = x, count = 0
        while (ans !== 1) {
            if (ans % 2) {
                ans = 3 * ans + 1
            } else {
                ans = ans / 2
            }
            count++
        }
        return memo[x] = count
    }

    return dp[k - 1][0]
};