// Challenge https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/description/
// Solution Reference https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2959362/100-runtime-js-solution/

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let result = 0
    for(let i = 0; i < rocks.length; i++){
        rocks[i] = capacity[i] - rocks[i]
        result += rocks[i]
    }
    if(additionalRocks >= result) {
        return rocks.length
    }
    rocks.sort((a, b) => a - b)
    result = 0
    for(let i in rocks){
        result += rocks[i]
        if(result > additionalRocks) return i
    } 
};