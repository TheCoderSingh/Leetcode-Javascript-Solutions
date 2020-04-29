/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = [];
    
    for(let i = 0; i < nums.length; i++)
        count.push(0);
    
    for(let i = 0; i < nums.length; i++) {        
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] < nums[i])
                count[i]++;
        }
    }
    
    return count;
};
