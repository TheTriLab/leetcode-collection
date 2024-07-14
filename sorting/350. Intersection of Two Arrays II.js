// Challenge https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
// Solution Reference https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/242050/javascript-solution-hashmap/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1)
        } else {
            map.set(n, 1)
        }
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n)
            map.set(n, map.get(n) - 1)
        }
    }
    return result
};