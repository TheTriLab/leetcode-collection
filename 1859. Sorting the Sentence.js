// Challenge 1859. Sorting the Sentence
// Solution Reference https://leetcode.com/problems/sorting-the-sentence/solutions/3522925/my-sortsentence/


/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let m = new Map();
    let arr = s.split(" ");
    arr.forEach((element) => {
        m.set(element[element.length - 1], element.slice(0, element.length - 1));
    });
    m = new Map([...m.entries()].sort());
    let result = "";
    for (const i of m.keys()) {
        result += m.get(i) + " ";
    }
    return result.trimEnd();
};