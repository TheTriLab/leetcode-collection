// Challenge https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
// Solution Reference https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4567458/javascript-solution-easy-direct-approach/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let obj = {}

   for(let match of matches){
       if(!obj[match[0]]) obj[match[0]] = 0
       if(!obj[match[1]]) obj[match[1]] = 0

       ++obj[match[1]]
   }

   let ans = [[],[]]

   for(let [key,value] of Object.entries(obj)){
       if(value === 0){
           ans[0].push(key)
       }
       if(value === 1){
           ans[1].push(key)
       }
   }

   return ans
};