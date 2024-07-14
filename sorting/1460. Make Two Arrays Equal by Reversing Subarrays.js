// Challenge https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== target[i]) return false;
    }
    
    return true;
};