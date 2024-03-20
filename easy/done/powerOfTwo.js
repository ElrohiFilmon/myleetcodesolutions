/**
 * @param {number} n
 * @param {Math.js}
 * @return {boolean}
 */
var isPowerOfTwo = function(num){
    //This does too `-\_('')-/-`
    return (num > 0) && (num & (num - 1)) === 0;
    //It worked but why 
    // if(n == 536870912){
    //     return true
    // }else{
    //     return Math.log(n) / Math.log(2) % 1 === 0;
    // }
    
    //Always thought brute force could solve a question and then find a faster way but ended up being primitive
    //two ways 
    //1.math//log(a)b=x == a^(x) = b so `-\('')/-` do the math(no pun intended)
    /*2.bitwise & since all of the binary values of the powers are set to two meaning
        ... 64 32 16 8 4  2 1      
        ... 56  5  4 3 2  1 0
                    <--------
            if we find a power of two in the index we change is with two
            
        In binary 2 is 10, 4 is 100, 8 is 1000
        what about other numbers?
        easy add two number for the chart above 
        3 = 2+1 which is 11
        so let's say it's 8-1 = 7 0111
        return (num > 0) && (num & (num - 1)) === 0;
        if they both have only one (1 bit) then it's true else false 
    */

    // post submission Mar/20/2024 5:58 little if condition `-\_('')-/-`
};

var num = 16;
console.log(isPowerOfTwo(num));
