/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = [];
    
    let total = num;
    
    while(total > 9) {
        arr = total.toString().split("");
        total = 0;
        
        for(let i = 0; i < arr.length; i++) {
             total += +arr[i];
        }
    }
    
    return total;
};
