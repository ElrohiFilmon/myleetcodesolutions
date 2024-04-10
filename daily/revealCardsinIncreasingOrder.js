/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    console.log(deck)
    let n = deck.length;
    let q = [];
    for (let i = 0; i < n; i++) {
        q.push(i);
    }
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[q.shift()] = deck[0];
        q.push(q.shift());      
    }
    console.log(result);
};
deckRevealedIncreasing([17,13,11,2,3,5,7])


