/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const rv = []
    for(let i=0;i<=nums.length-1;++i){
        const num = Math.abs(nums[i])
        const index = num -1
        if(nums[index] < 0 ){
            rv.push(num)
        }
        else{
            nums[index] *= -1;
        }
            
    }
    return rv
}