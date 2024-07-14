// Challenge https://leetcode.com/problems/intersection-of-two-arrays/


// Solution 01: Brute force
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = new Set()

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                res.add(nums1[i])
            }
        }
    }

    return [...res]
};

// Solution 02: Using Set and check to loop small arr first

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set()
    let smallArr = nums1.length >= nums2.length ? nums2 : nums1
    let bigArr  = nums1.length >= nums2.length ? nums1 : nums2
    for(let i =0;i < smallArr.length;i++){
        if(bigArr.includes(smallArr[i]) && !res.has(smallArr[i])) {
            res.add(smallArr[i])
        }
    }
    return [...res]
};