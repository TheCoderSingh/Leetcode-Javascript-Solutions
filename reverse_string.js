/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lngth = s.length;
    let x = lngth/2;
    for(let i = 0; i < x; i++) {
        let temp = s[i];
        s[i] = s[lngth-1-i];
        s[lngth-1-i] = temp;
    }
};
