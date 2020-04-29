/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let decompressed = [], freq = [], val = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 == 0)
            freq.push(nums[i]);
        else
            val.push(nums[i]);
    }
        
    for(let i = 0; i < freq.length; i++) {
        for(let j = 0; j < freq[i]; j++)
            decompressed.push(val[i]);
    }

    return decompressed;
};
