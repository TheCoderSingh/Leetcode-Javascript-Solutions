/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let origLength = nums.length;
    let unique = new Set(nums);

    for(let i = 1; i <= origLength; i++) {
        if(!unique.has(i)) {
            result.push(i);
        }
    }

    return result;
};
