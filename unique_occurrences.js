/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occ = [], uniq = [];
    
    arr = arr.sort();
    uniq = arr.filter((item, index) => !arr.includes(item, index + 1));
    
    for(let i = 0 ; i < uniq.length; i++) {
        let count = arr.filter(item => item === uniq[i]).length;
        occ[i] = count;
    }
    
    occ = occ.sort();
    
    for(let i = 0; i < occ.length; i++) {
        if(occ[i] === occ[i + 1])
            return false;
    }
    
    return true;
};
