/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newStr = [];
    
    indices.forEach((index, i) => {
        newStr[index] = s[i];
    });
    
    return newStr.join("");
};
