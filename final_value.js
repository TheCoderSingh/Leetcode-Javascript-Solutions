/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
 return (operations.reduce(
            (accumulator, value) => value.includes("++") ? ++accumulator : --accumulator, 0))

};
