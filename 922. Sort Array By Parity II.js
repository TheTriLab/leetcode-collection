// Challenge https://leetcode.com/problems/sort-array-by-parity-ii/description/

// Solution 01: Split odd and even nums into two and push them back
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
   let arr = []
   let res = []

   for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arr.unshift(nums[i])
        } else {
            arr.push(nums[i])
        }
   }

    for (let j = 0; j < nums.length; j++) {
        res.push(arr.shift())
        res.push(arr.pop())
    }

    return res
};

// Solution 02: Three pointers in the loop, one for array pointer, second for even pointer, third for odd pointer
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let res = []
 
    for (let i = 0, even = 0, odd = 1; i < nums.length; i++) {
         if (nums[i] % 2 === 0) {
             res[even] = nums[i]
             even += 2
         } else {
             res[odd] = nums[i]
             odd += 2
         }
    }
 
     return res
 };

 // Solution 03: Using 2 pointer even and odd with in-place array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0
    let odd = 1
    const n = nums.length
 
    while (even < n && odd < n) {
         // Case 1, nums at even and odd exchange each other
         if (nums[even] % 2 === 1 && nums[odd] % 2 === 0) {
             let temp = nums[even]
             nums[even] = nums[odd]
             nums[odd] = temp
 
             even += 2
             odd += 2
         }
 
         // Case 2: nums even is on the right position, keep it
         if (nums[even] % 2 === 0) {
             even += 2 
         }
 
         // Case 3: nums odd is on the right position, keep it
         if (nums[odd] % 2 === 1) {
             odd += 2
         }
    }
 
    
 
     return nums
 };