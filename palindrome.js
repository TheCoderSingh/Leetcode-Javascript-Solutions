/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let second = 0;
    let i = 1;
    let len = 0;
    let z = x;

    if (x < 0)
        return false;

    while(true) {
        let temp = Math.pow(10, i);

        if(x / temp < 1) {
            len = i - 1;
            break;
        }

        i++;
    }

    if (len === 0)
        return true;

    // i = 1;
    
    let j = 0;
    let temp = z;
    while(j <= len) {
        temp = z % 10;
        console.log(z)

        second += (temp * Math.pow(10, i - 1));
        console.log(second)

        z = Math.trunc(z / 10);
        temp = z;
        console.log(z)
        console.log("---\n")
        j++;
        i--;
    }

    return x === second;
};
