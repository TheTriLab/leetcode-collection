// Challenge https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
// Solution Reference https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001761/output-reversing-approach-99-63-dry-run-simple-8-lines-to-understand-explained-array/

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=>b-a)
    var result = []
    for(let card of deck){
        if(result.length){
            result.unshift(result.pop())
            }
        result.unshift(card)
        }
    return result
};