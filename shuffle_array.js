/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let number = [];
    
    for (let i = 0; i < (2*n); i++) {        
        if(i % 2 === 0) {
            number[i] = nums[i/2];
        } else {
            number[i] = nums[n];
            n++;
            
            if(n === nums.length)
                return number;
        }
    }
    
    return number;
};
