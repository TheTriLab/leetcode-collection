// Challenge https://leetcode.com/problems/occurrences-after-bigram/description/
// Solution Reference https://leetcode.com/problems/occurrences-after-bigram/solutions/4549325/beats-98-of-online-javascript-solutions/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    text  = text.split(" ");
    const res = [];

    for(let i = 0 ; i < text.length-1;i++){
        console.log(text[i],text[i+1]);
        if(text[i] === first && text[i+1] === second && text[i+2]){
            res.push(text[i+2]);
        }
    }

    return res;
};