// Challenge https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/
// Solution Reference https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/4835858/js-solution-by-bharadwaj/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    for (let i = 0; i < s.length; i++) {
        if (s.substring(i, i + part.length) == part) {
            s = s.slice(0, i) + s.slice(i + part.length);
            i -= part.length;
        }
    }
    return s;
};