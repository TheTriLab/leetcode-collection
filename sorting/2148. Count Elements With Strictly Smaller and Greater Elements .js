// Challenge https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/
// Solution Reference https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/4348695/simple-solution/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let count = 0
    nums.forEach((item, index) => {
        if(item > min && item < max){
            count++
        }
    })
    return count
};