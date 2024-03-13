/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = nums.filter((num) => num === 0);
    let i = 0;

    while(i < nums.length) {
        if(nums[i] === 0) nums.splice(i, 1);
            else i++;
    }

    nums.splice(nums.length, 0, ...zeroes);
};
