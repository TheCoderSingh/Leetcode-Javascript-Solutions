/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numArr = [], prod = 1, sum = 0;
    
    let createNumArray = (x) => {
          numArr.push(parseInt(x));
    }
    
    n.toString().split("").map(createNumArray);
    
    for(let i = 0; i < numArr.length; i++) {
        prod *= numArr[i];
        sum += numArr[i];
    }
    
    return (prod-sum);
};
