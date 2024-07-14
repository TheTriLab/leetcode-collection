// Challenge https://leetcode.com/problems/matrix-cells-in-distance-order/description/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const buckets = []
    const result = []
    const maxDist = Math.max(rCenter, rows - 1 - rCenter) + Math.max(cCenter, cols - 1 - cCenter)

    for (let i = 0; i <= maxDist; i++) {
        buckets.push([])
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
        const dist = Math.abs(r - rCenter) + Math.abs(c - cCenter);
        buckets[dist].push([r, c])
        }
    }

    for (let i = 0; i <= maxDist; i++) {
        result.push(...buckets[i])
    }
    
    return result
};