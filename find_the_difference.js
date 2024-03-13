/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) { 
    let x = s.split("").sort().join("");
    let y = t.split("").sort().join("");
    
    for(let i = 0; i < y.length; i++)
        if(y[i] !== x[i]) return y[i];
};
