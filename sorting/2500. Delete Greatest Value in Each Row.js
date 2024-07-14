// Challenge https://leetcode.com/problems/delete-greatest-value-in-each-row/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let sum = 0
    // for (let j = 0; j < grid.length; j++) {
    //         grid[j].sort((a, b) => b - a)
    // }

    const rowLength = grid[0].length
    
    for (let i = 0; i < rowLength; i++) {
        let removedItems = []

        for (let j = 0; j < grid.length; j++) {
            const maxInRow = Math.max(...grid[j])
            removedItems.push(maxInRow)

            grid[j].splice(grid[j].indexOf(maxInRow), 1)
        }

        sum += Math.max(...removedItems)
    }

    return sum
};
