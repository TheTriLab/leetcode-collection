// Challenge https://leetcode.com/problems/letter-tile-possibilities/description/
// Solution Reference https://leetcode.com/problems/letter-tile-possibilities/solutions/310304/javascript-solution/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let map = new Map();
	for(let i = 0; i < tiles.length; i++) {
		map.set(tiles[i], (map.get(tiles[i]) || 0) +  1);
	}
	return helper(map);
};

function helper(map) {
    let sum = 0;
    for(let [key, value] of map.entries()) {
        if(value === 0) continue;
        sum++;
        map.set(key, map.get(key) - 1);
        sum += helper(map, sum);
        map.set(key, map.get(key) + 1);
    }
    return sum
}