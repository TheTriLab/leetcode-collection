// Challenge https://leetcode.com/problems/sort-the-people/description/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((name, i) => ({
        name,
        height: heights[i]
    }))
    .sort((a, b) => b.height - a.height)
    .map((e) => {
        return e.name
    })
};