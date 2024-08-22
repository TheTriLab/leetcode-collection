// Challenge https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// Solution Reference https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2426817/o-n-time-100-faster-js-easy-without-using-stack-only-loops-javascript/

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    pattern += "I";
  
    let num = Array(pattern.length).fill("");
    let counter = 1;
    let ans = "";
  
    for(let i=0;i<pattern.length;i++) {
        if(pattern[i] == "I"){
             num[i] = counter++;
            let prev = i-1;
            while(prev >= 0 && pattern[prev] == "D") {
                num[prev] = counter++;
                prev--;
            }
           
        }
        
    }

    for(let i = 0; i < pattern.length; i++) {
        ans += num[i];
    }
    
    return ans;
};