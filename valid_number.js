/**
 * @param {string} s
 * @return {boolean}
 */
let hasADot = 0;
let hasAnE = 0;

var isNumber = function(s) {
    hasADot = 0;
    hasAnE = 0;
    s = s.trim();
    return validateForFirstCharacter(s);
};

let validateForFirstCharacter = (s) => {
    if(validateFirstCharacter(s[0])) {
        if(!isNaN(s[0]))
            return validateForNumber(s, 0);
        else if(s[0] === "+" || s[0] === "-")
            return validateForSign(s, 0);
        else if(s[0] === ".")
            return validateForDot(s, 0);
        else
            return false;
    } else
        return false;
}


let validateFirstCharacter = (fc) => {
    return (!isNaN(fc) || fc === "+" || fc === "-" || fc === "." || fc === " ");
}

let validateForNumber = (currentString, currentIndex) => {
    let nextCharacter = currentString[currentIndex + 1];
    
    if(nextCharacter === undefined)
        return true;
    else if(nextCharacter === " ")
        return false;
    else if(nextCharacter === ".")
        return validateForDot(currentString, currentIndex + 1);
    else if(nextCharacter === "e")
        return validateForE(currentString, currentIndex + 1);
    else if(!isNaN(nextCharacter))
        return validateForNumber(currentString, currentIndex + 1);
    else
        return false;
}

let validateForSign = (currentString, currentIndex) => {
    let nextCharacter = currentString[currentIndex + 1];
    
    if(nextCharacter === "." && !isNaN(currentString[currentIndex + 2]))
        return validateForDot(currentString, currentIndex + 1);
    else if(!isNaN(nextCharacter) && nextCharacter !== " ")
        return validateForNumber(currentString, currentIndex + 1);
    else
        return false;
}

let validateForDot = (currentString, currentIndex) => {
    let nextCharacter = currentString[currentIndex + 1];
    
    if(hasADot)
        return false;
    
    hasADot = 1;
    
    if(hasAnE)
        return false;
    
    if(nextCharacter === undefined) {
        if(currentIndex === 0)
            return false;
        else
            return true;
    } else if(!isNaN(nextCharacter) && nextCharacter !== " ")
        return validateForNumber(currentString, currentIndex + 1);
    else if(nextCharacter === "e") {
        if(currentString[currentIndex - 1] === undefined)
            return false;
        
        return validateForE(currentString, currentIndex + 1);   
    }
    else
        return false;
}

let validateForE = (currentString, currentIndex) => {
    let nextCharacter = currentString[currentIndex + 1];

    if(hasAnE)
            return false;
    
    hasAnE = 1;

    if(nextCharacter === "+" || nextCharacter === "-") {
        return validateForSign(currentString, currentIndex + 1);
    } else if(!isNaN(nextCharacter)) {
        return validateForNumber(currentString, currentIndex + 1);
    } else
        return false;
}
