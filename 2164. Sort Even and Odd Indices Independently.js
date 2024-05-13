// Challenge https://leetcode.com/problems/sort-even-and-odd-indices-independently/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odd = []
    let even = []
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }

    odd.sort((a, b) => b - a)
    even.sort((a, b) => a - b)

    for (let i = 0; i < nums.length/2; i++) {
        if (even[i]) {
            res.push(even[i])
        }
        
        if (odd[i]) {
            res.push(odd[i])
        }
    }
    return res
};