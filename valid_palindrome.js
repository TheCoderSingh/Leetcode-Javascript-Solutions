/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while(left <= right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else return false;
    }

    return true;
};
