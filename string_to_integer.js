/**
 * @param {string} str
 * @return {number}
 */

let isNegative;
var myAtoi = function(str) {
    isNegative = 0;
    str = str.trim();
    
    if(str[0] === "-" || str[0] === "+" || !isNaN(str[0])) {
        if(str[0] === "+") {
            return checkNumber(str, 1);   
        } else if(!isNaN(str[0])) {
            return checkNumber(str, 0);
        } else {
            if(str[0] === "-") {
                isNegative = 1;
                str = str.substring(1, str.length);
                
                return checkNumber(str, 0);
            }
        }
    } else {
        return 0;
    }
};

let checkNumber = (currentString, currentIndex) => {
    let newNumber = "";
    let INT_MIN = Math.pow(-2, 31);
    let INT_MAX = Math.pow(2, 31) - 1;
    
    for(let i = 0; i < currentString.length; currentIndex++, i++) {
        if(isNaN(currentString.charAt(currentIndex)))
            break;
        
        if(currentString.charAt(currentIndex) === " ")
            break;
        
        newNumber += currentString.charAt(currentIndex);
    }
    
    if(isNegative)
        newNumber *= -1;
    
    if(newNumber < INT_MIN)
        return INT_MIN;
    else if(newNumber > INT_MAX)
        return INT_MAX;
    
    return newNumber;
}
