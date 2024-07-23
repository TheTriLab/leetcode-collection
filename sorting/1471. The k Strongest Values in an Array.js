// Challenge https://leetcode.com/problems/the-k-strongest-values-in-an-array/description/
// Solution Reference https://leetcode.com/problems/the-k-strongest-values-in-an-array/submissions/1330900206/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(A, k) {
    const { abs, floor } = Math

    A.sort((a, b) => a - b)
    
    const m = A[floor((A.length-1) / 2)]
    
    A.sort((a, b) => abs(a - m) - abs(b - m))
    
    A.reverse()
    
    return A.slice(0, k)
};