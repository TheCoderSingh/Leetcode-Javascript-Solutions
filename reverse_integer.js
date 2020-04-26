/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg;
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) - 1;
    
    if(x < 0)
        isNeg = 1;
    
	x = x.toString();
    
    for(let i = x.length-1; i >= 0; i--) {
        x = x.concat(x[i]);
    }
    
    x = x.substring(x.length/2, x.length);
    
    x = parseInt(x);
    
    if(x < min || x > max)
        return 0;
    
    if(isNeg)
        x = -x;
    
    return x;
};
