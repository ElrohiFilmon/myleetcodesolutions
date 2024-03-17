/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start=0;
    for(var i =0;i<nums.length;++i){
        if(nums[i]!=0){
            nums[start++]= nums[i];
            console.log(nums);
        }
    }

    while(start<nums.length){
        nums[start++] =0;
    }
};
var arr=[0,1,0,3,12];
console.log(moveZeroes(arr));
