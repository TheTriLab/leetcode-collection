// Challenge https://leetcode.com/problems/k-closest-points-to-origin/description/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let res = []
    points.sort((a, b) => Math.sqrt(a[0]**2 + a[1]**2) - Math.sqrt(b[0]**2 + b[1]**2))

    for (let i = 0; i < k; i++) {
        res.push(points[i])
    }

    return res
};