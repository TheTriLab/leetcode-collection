// Challenge https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/
// Solution Reference: https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2500113/beginner-friendly-java-javascript-python-solution/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a-b)
    let arr = []
    for(let query of queries){
        let count = 0
        let sum = 0
        for(let i = 0; i < nums.length; i++){
            if(sum + nums[i] <= query){
                sum += nums[i]
                count++
            }
        }
        arr.push(count)
    }
    return arr
};