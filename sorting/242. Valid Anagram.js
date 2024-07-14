// Challenge https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = new Map()
    const tMap = new Map()
    let res = true

    if (t.length !== s.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    }

    for (let j = 0; j < t.length; j++) {
        tMap.set(t[j], (tMap.get(t[j]) || 0) + 1)
    }

    sMap.forEach((value, key) => {
        if (value !== tMap.get(key)) {
            res = false
        }
    })

    return res
};