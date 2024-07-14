// Challenge https://leetcode.com/problems/happy-students/description/
// Solution Reference https://leetcode.com/problems/happy-students/solutions/4055050/javascript-2860-happy-students/


/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
    let n = nums.length

    // sort nums[i]
    nums.sort((a, b) => a - b)

    let happyCount = 0

    // CASE 1 - no one is selected

    // CASE 1A - selected till here - selected > nums[i]
    // nothing to do

    // CASE 1B - others are not selected (others are j = i+1, i+2....)
    // check only one j, as it is sorted increasing
    //    must be selected < nums[j]
    let isHappy = 0 < nums[0]
    happyCount += isHappy

    // CASE 2 - one, two... are selected
    let selected = 0
    for (let i = 0; i < n; i++) {
        // CASE 2A - selected till here - selected > nums[i]
        selected++
        let isHappy = selected > nums[i]

        // CASE 2B - others are not selected (others are j = i+1, i+2....)
        // check only one j, as it is sorted increasing
        //    must be selected < nums[j]
        let j = i + 1
        if (j < n && selected >= nums[j]) {
        isHappy = false
        }

        happyCount += isHappy
    }
    return happyCount
};


// -----------------
// Initial Thought

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var countWays = function(nums) {
//     // Find min => 
//     // Find max => 
//     // Length => n

//     // Choose all => max[choose] < n
//     // Choose no one => min[choose] > 0
//     // Choose y, don't choose n - y => max[choose] < y
//     //                          => min[not choose] > y
//     //  

//     // Choose 0 => min[not choose] > 0
//     // Choose 1 => max[choose] < 1, min[(n - 1) notchoose] > 1
//     // Choose 2 => max[choose] < 2, min[(n - 2) notchoose] > 2
//     // Choose 3
//     //...
//     // Choose n => max[choose] < n

//     nums.sort((a, b) => a - b)

//     let countChosen = 0
//     const n = nums.length

//     while (countChosen <= n) {
//         let chosen = []
//         let notChosen = []

//         let m = 0
//         let z = 1
        
//         for (let i = 0; i < n; i++) {
//             if (nums[i] < countChosen) {
//                 // chosen.push(nums[i])
//                 m++
//                 z *= m
//             } else {
//                 notChosen.push(nums[i])
//             }
//         }



//         countChosen++
//     }
    
// };