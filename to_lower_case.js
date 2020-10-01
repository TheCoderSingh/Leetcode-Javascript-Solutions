/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let result = "";
    
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let code = str.charCodeAt(i);
            let char = String.fromCharCode(code + 32);
            
            result += char;
        } else
            result += str[i];
    }
    
    return result;
};
