/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let count = 0;
    for(let i = n;i>0;--i){
        count++;
        i/=3;
    }
    if(Math.pow(3,count)==n){
        return true
    }else{
        return Math.log(n)/Math.log(3) %1===0;
    }

    
};