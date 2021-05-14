// /**
//  * @param {number} n
//  * @return {number}
//  */

var countPrimes = function(n) {
    if (n == 0 || n == 1) return 0
    
    let count = 0
    for (let i = 2; i < n; i++) if(isPrime(i)) count++
    return count
};

const isPrime = n => {
    if (n == 2) return true
    for (let i = 2; i <= Math.sqrt(n); i++) 
        if (n % i == 0) return false
    
    return true
}
