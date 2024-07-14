// Challenge https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/description/

/**
 * @param {string[]} words
 * @return {string[]}
 */

var removeAnagrams = function(words) {
    let i = 1

    while (0 < i && i < words.length) {
        if (words[i - 1].length !== words[i].length) {
            i++
            continue
        }

        if ([...words[i - 1]].sort().join("") === [...words[i]].sort().join("")) {
            words.splice(i, 1)
        } else {
            i++
        }
    }

    return words
};