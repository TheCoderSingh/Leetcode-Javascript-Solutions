/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    let test = [];

    if(s.length % 2 !== 0) return false;

    if(s[0] === ")" || s[0] === "]" || s[0] === "}") return false;

    if(s[s.length - 1] === "(" || s[s.length - 1] === "[" || s[s.length - 1] === "{") return false;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") test.push(s[i]);
        else if(brackets[test.pop()] !== s[i]) return false;
    }

    return test.length === 0;
};
