// Challenge https://leetcode.com/problems/minimum-moves-to-convert-string/description/
// Solution Reference https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/4427267/simple-solution-in-js-98-beats/

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let count = 0;

    for(let i=0; i<s.length;i++){
        if(s[i] === 'X'){
            count++;
            i += 2;
        }
    }

    return count;
};