// Challenge https://leetcode.com/problems/pancake-sorting/description/
// Solution Reference https://leetcode.com/problems/pancake-sorting/solutions/4381028/beats-95-92-of-users-with-javascript-easy-javascript-solution/
// ![](https://assets.leetcode.com/users/images/2cdc0679-378a-4538-bc2c-a2667b16cb91_1598705157.840506.png)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const max = arr.length
    const result = []

    const reversePancake = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }

    for (let i = max; i > 0; i--) {
        const target = arr.findIndex(pancake => pancake === i)

        reversePancake(0, target)
        result.push(target + 1)
        reversePancake(0, i - 1)
        result.push(i)
    }

    return result
};