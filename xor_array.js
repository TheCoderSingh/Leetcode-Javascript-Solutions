/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let total = 0;
    
    for(let i = 0; i < n; i++)
        total ^= start + 2 * i;

    return total;
};
