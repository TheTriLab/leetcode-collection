// Challenge https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/
// Solution Reference https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2120216/java-javascript-simple-fast-solution-faster-than-100/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a-b)
    let list = []
    let count = 0
    list.push(nums[0])
    for (i = 1; i < nums.length; i++) {
        let num = nums[i]
        if (num - list[0]>k) {
            count++
            list = []
        }
        list.push(num)
    } if (list.length) count++
    return count
};