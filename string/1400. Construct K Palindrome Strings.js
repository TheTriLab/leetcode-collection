// Challenge https://leetcode.com/problems/construct-k-palindrome-strings/description/
// Solution Reference https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4623189/js-solution-by-bharadwaj/

var canConstruct = function (s, k) {
    if (s.length < k) {
        return false
    }
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (freq[curr]) {
            freq[curr]++
        } else {
            freq[curr] = 1
        }
    }
    let count = 0
    let x = Object.keys(freq);
    for (let i = 0; i < x.length; i++) {
        let curr = x[i]
        if (freq[curr] % 2 != 0) {
            count++
        }
    }
    if (count > k) {
        return false
    }
    return true
};