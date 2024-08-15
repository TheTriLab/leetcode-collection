// Challenge https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/
// Solution Reference https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431803/solution-by-dare2solve-detailed-explanation-clean-code/

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let res = ["0", "1"];
    let tmp = [];
    for (let i = 1; i < n; ++i) {
        for (let x of res) {
        tmp.push(x + "1")
        if (x.endsWith("1")) tmp.push(x + "0");
        }
        [res, tmp] = [tmp, res];
        tmp.length = 0;
    }
    return res;
};