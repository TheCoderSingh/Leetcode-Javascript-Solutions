/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let max = nums.length/2;

    nums.sort();

    for(let i = 0; i < nums.length; i++) {        
        count++;
        if(count > max) return nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] === nums[i]) {
                count++;
                if(count > max) return nums[i];
            }
            else
                break;
        }

        count = 0;
    }
};
