
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
var removeElement = function(nums, val) {
    nums.sort((item)=>(item===val)?1:-1).filter(item=>item!==val)
}