// Challenge https://leetcode.com/problems/sort-colors/description/

// Solution: Selection Sort
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var sortColors = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let temp_min = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[temp_min]) {
                temp_min = j
            }
        }

        swap(nums, temp_min, i)

    }
};