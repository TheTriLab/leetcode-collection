// Challenge https://leetcode.com/problems/fair-candy-swap/description/
// Solution Reference https://leetcode.com/problems/fair-candy-swap/solutions/2570047/js-faster-than-100-best-solution-with-hashmap/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const totalAliceSize = aliceSizes.reduce((prev, current) => prev + current, 0);
    const totalBobSize = bobSizes.reduce((prev, current) => prev + current, 0);
    
    const resolve = (array1, array2, difference) => {
        const hashmap = new Map();
        for (let i = 0; i < array1.length; i++) {
            hashmap.set(array1[i], i);
        }
        
        for (let i = 0; i < array2.length; i++) {
            if (hashmap.has(array2[i] + difference/2)) return [array2[i] + difference/2, array2[i]];
        }
    }
    
    return resolve(aliceSizes, bobSizes, totalAliceSize - totalBobSize);
};