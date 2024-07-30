// Challenge https://leetcode.com/problems/odd-string-difference/description/
// Solution Reference https://leetcode.com/problems/odd-string-difference/solutions/

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let a = null;
    let b = null;
    for(let w of words) {
        let k ='';
        for (let i = 1; i< w.length; i++) {
            k += (w.charCodeAt(i) - 97) - (w.charCodeAt(i-1) - 97) + ',';
        }
        if (a && b) return a[0] === k ? b[1] : a[1];
        if (!a || a[0] === k) a = [k,w]
        else b = [k,w]
    }

    return words[words.length - 1]
};