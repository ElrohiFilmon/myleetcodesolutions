// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val,expecteedNums = [],start = 0,end=nums.length -1,count=0) {

//     nums.sort((a,b)=>{return a - b});
//     console.log(nums);
    
//     while(start<end){
//         if(nums[start]==val && nums[end]!=val){
//             nums[start] = nums[end]
//             nums[end] = '_'

//         }
//         end--
//         start++
//     }
//     // nums.map(el => el === '_'? nums.splice(nums.indexOf(el), 1): el);

//     for(var i = nums.length - 1; i >= 0; i--){
//         if(nums[i] === '_') nums.pop();
//     }
//     // while(start<ftl){
//     //     if(nums[ftl]=='_'){
//     //         nums.pop();
//     //         ftl--;
//     //     }
//     // }

//     // nums.sort((a,b)=>{return b - a});

// console.log(nums)
// };

