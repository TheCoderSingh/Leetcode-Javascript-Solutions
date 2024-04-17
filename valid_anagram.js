/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(JSON.stringify(Array.from(s).sort()) === JSON.stringify(Array.from(t).sort()))
        return true;
    else
        return false;
};
