/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.sort((el)=>(el%2==0)?-1:+1)
};
