/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function(A) {
    let evens = [], odds = [];
    
    sortArray(A, evens, odds);
    
    if(A.includes(-1) || A.includes(-2))
        sortArray(A, evens, odds);
    
    return A;
};

let sortArray = (A, evens, odds) => {
    for(let i = 0; i < A.length; i++) {
        if(i % 2 === 0) {
            if(A[i] % 2 !== 0) {
                odds.push(A[i]);
                
                if(evens.length !== 0) {
                    A[i] = evens[evens.length - 1];
                    evens.pop();
                } else
                    A[i] = -2;
            } else {
                if(A[i] === -2) {
                    A[i] = evens[evens.length - 1];
                    evens.pop();
                }
            }
        } else {
            if(A[i] % 2 === 0) {
                evens.push(A[i]);
                if(odds.length !== 0) {
                    A[i] = odds[odds.length - 1];
                    odds.pop();
                } else
                    A[i] = -1;
            } else {
                if(A[i] === -1) {
                    A[i] = odds[odds.length - 1];
                    odds.pop();
                }
            }
        }
    }
}
