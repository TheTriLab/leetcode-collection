// Challenge https://leetcode.com/problems/minimum-number-game/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    nums.sort((a ,b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i + 1], nums[i])
    }

    return arr
};