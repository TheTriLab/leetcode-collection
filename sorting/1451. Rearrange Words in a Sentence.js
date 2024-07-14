// Challenge https://leetcode.com/problems/rearrange-words-in-a-sentence/description/
// Solution Reference https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/2815090/easy-solution/

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    text = text.toLowerCase().split(" ").sort((a,b)=> a.length - b.length).join(" ")
    text = text[0].toUpperCase() + text.slice(1)
    return text
};