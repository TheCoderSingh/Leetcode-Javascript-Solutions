/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(i !== nums.length - 1) {
            if(nums[i] > nums[i + 1]) {
                if(nums[i + 1] < nums[i - 1])
                    nums[i + 1] = nums[i];
                else
                    nums[i] = nums[i + 1];
                break;
                
                if(i !== 0) {
                    if(nums[i - 1] < nums[i]) {
                       return false;
                    }
                }
            }
        }
    }    
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            return false;
        } 
    }
    
    return true;
};
