/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2,n,end = nums1.length-1,i=0){
    while(end>=m){
        if(nums1[end]===0){
            nums1.splice(end,1,nums2[i])
            i++;
        }
        end--;
    }
    nums1.sort((a,b)=>{return a-b })
};