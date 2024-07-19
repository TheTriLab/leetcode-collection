// Challenge https://leetcode.com/problems/reordered-power-of-2/description/
// Solution Reference https://leetcode.com/problems/reordered-power-of-2/solutions/2483526/one-easy-way-to-solve/

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let str = n.toString();
    let initialString =  str.split('').sort().join('');
     
     
     for(let i=0; i<30; i++){
         let tempString = (1<<i).toString();
        let finalString = tempString.split('').sort().join('');
         if(initialString===finalString){
             return true;
         }
     }
     return false;
 };