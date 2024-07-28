// Challenge https://leetcode.com/problems/letter-case-permutation/description/
// Solution Reference https://leetcode.com/problems/letter-case-permutation/solutions/1068160/simple-backtracking-recursion-solution/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let n = s.length;
    let res = [];
    let char = /[a-zA-Z]/;
    let arr = [];
    
    function backtrack(i){
        if(i == n){
            res.push(arr.join(''));
            return;
        }
        
        if(char.test(s[i])){
            arr[i] = s[i].toLowerCase();
            backtrack(i+1);
            arr[i] = s[i].toUpperCase();
            backtrack(i+1);
        } else {
            arr[i] = s[i];
            backtrack(i+1);
        }
    }
    
    backtrack(0);
    return res;
};