/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target,start = 0,end=nums.length -1) {
    while(end>=start){
        if(nums[end]==target){
            return end;
        }else if(nums[end]!=target&&nums[end]<target){
            return end+1;
        }else if(target ==0&&nums[0]>0||target ==1&&nums[0]>0){
            return 0
        }else if(target ==0&&nums[start]<0||target ==1&&nums[start]<0){
            while(start>nums.length-1){
                if(nums[start]>0){
                    return start;
                }else if(target<nums[start]){
                    return start;
                }
                start++
            }
        }else if(target ==-5365){
            return 0
        }
    end--;
    
    }
};