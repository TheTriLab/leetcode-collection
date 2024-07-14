// Challenge https://leetcode.com/problems/assign-cookies/description/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let gI = 0
    let sI = 0
    let res = 0

    while (gI < g.length && sI < s.length) {
        if (s[sI] >= g[gI]) {
            res++
            
            sI++
            gI++
        } else {
            sI++
        }
    }

    return res
};