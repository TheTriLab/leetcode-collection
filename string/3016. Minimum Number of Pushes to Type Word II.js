// Challenge https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/
// Solution Reference https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593444/o-n-greedy-heap-java-c-python-go-rust-javascript/

 /**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const letterFreq = new Array(26).fill(0);
    for (let c of word) {
        letterFreq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    letterFreq.sort((a, b) => b - a);
    
    let totalPresses = 0;
    for (let i = 0; i < 26; i++) {
        if (letterFreq[i] === 0) break;
        totalPresses += Math.floor(i / 8 + 1) * letterFreq[i];
    }
    
    return totalPresses;
};