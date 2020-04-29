/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let digits = 0, count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].toString().length; j++)
            digits++;
        
        if(digits % 2 == 0)
            count++;
        
        digits = 0;
    }
    
    return count;
};
