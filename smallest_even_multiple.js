/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n % 2 === 0)
        return n;

    return n * 2;
};
