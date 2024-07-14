// Challenge https://leetcode.com/problems/sort-array-by-parity/


// Solution 1: Loop and unshift the even number, push the odd number to the result array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
    }

    return result
};

// Solution 2: Using 2 pointers loop

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] % 2 === 0) {
            left++
        } else if (nums[right] % 2 === 1) {
            right--
        } else {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp

            left++
            right--
        }
    }

    return nums
};