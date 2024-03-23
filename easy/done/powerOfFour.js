/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return Math.log(n)/Math.log(4)%1==0;
    //same thing as the power of two
};