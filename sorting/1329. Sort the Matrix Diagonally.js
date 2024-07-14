// Challenge https://leetcode.com/problems/sort-the-matrix-diagonally/description/
// Solution Reference https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1735898/beginner-friendly-java-javascript-python-solution/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let map = {}
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            if(!map[i-j])    map[i-j] = []
            map[i-j].push(mat[i][j])
        }
    }
    for(let key in map){
        map[key].sort((a,b)=>{return a-b})
    }
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            mat[i][j] = map[i-j].shift()
        }
    }
    return mat
};