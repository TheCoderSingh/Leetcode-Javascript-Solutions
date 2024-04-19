/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let temp = nums;

    while(temp.length !== 1) {
        let mid = temp[Math.floor(temp.length / 2)];
        let index = Math.floor(temp.length / 2);

        if(target > mid) {
            temp = temp.slice(index);
        } else if(target < mid) {
            temp = temp.slice(0, index);
        } else {
            return nums.indexOf(mid);
        }
    }
    if(target === nums[0]) return 0;

    return -1;
};
