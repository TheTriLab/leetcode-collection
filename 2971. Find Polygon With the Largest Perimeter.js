// Challenge https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/
// Solution Reference https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4733143/javascript-professional-approach-and-in-depth-explanation/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b)
    let maxPerimeter = -1
    let curSum = 0
    
    for(let i = 0; i < nums.length; i++) {
        if(i >= 2 && curSum > nums[i]) {
            maxPerimeter = curSum + nums[i]
        }
        curSum += nums[i]
    }

    return maxPerimeter
};