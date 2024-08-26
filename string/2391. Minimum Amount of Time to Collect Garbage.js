// Challenge https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/
// Solution Reference https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4308246/video-give-me-10-minutes-beats-98-how-we-think-about-a-solution/

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let res = 0;

    for (const g of garbage) {
        res += g.length;
    }

    let [m, p, g] = [false, false, false];

    for (let i = travel.length; i > 0; i--) {
        m = m || garbage[i].includes('M');
        p = p || garbage[i].includes('P');
        g = g || garbage[i].includes('G');

        res += travel[i - 1] * (m + p + g);
    }

    return res;    
};