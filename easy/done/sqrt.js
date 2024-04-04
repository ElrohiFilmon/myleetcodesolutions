/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }

    let left = 1;
    let right = x;

    while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
        return mid;
    } else if (square < x) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
    }

    return right;
};
