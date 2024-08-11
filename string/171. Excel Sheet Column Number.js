// Challenge https://leetcode.com/problems/excel-sheet-column-number/description/
// Solution Reference https://leetcode.com/problems/excel-sheet-column-number/solutions/3042234/very-simple-but-smart-javascript-solution/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    let length = columnTitle.length;
    for(let i = 0; i < length; i++){
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
    }
    return result;
};