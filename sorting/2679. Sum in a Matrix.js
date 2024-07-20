// Challenge https://leetcode.com/problems/sum-in-a-matrix/description/
// Solution Reference https://leetcode.com/problems/sum-in-a-matrix/solutions/3520683/very-simple-solution-100-fast-sorting/

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => a - b);
    }
    
    for (let i = 0; i < nums[0].length; i++) {
        let maxi = 0;
        for (let j = 0; j < nums.length; j++) {
            maxi = Math.max(nums[j][i], maxi);
        }
        sum += maxi;
    }
    
    return sum;
};