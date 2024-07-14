// Challenge https://leetcode.com/problems/finding-3-digit-even-numbers/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = new Set()
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) {
            continue
        }

        for (let j = 0; j < digits.length; j++) {
            if (j === i) {
                continue
            }


            for (let z = 0; z < digits.length; z++) {
                if (z === i || z === j || digits[z] % 2 !== 0) {
                    continue
                } 

                res.add(Number('' + digits[i] + digits[j] + digits[z]))
            }
        }
    }

    return [...res].sort((a, b) => a - b)
};