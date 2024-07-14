// Challenge https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/
// Solution Reference https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4518930/go-python-javascript-java-o-n-time-o-n-space/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let num_set = new Set()
    for (let item of nums){
        num_set.add(item)
    }
    let sum = nums[0]
    let idx = 1
    while (idx<nums.length && nums[idx] == nums[idx-1]+1){
        sum+=nums[idx]
        idx++
    }
    while (num_set.has(sum)){
        sum++
    }
    
    return sum
};