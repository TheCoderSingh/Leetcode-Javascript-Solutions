/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let peaks = [];

    if(mountain.length <= 2) return peaks;

    for(let i = 1; i < mountain.length - 1; i++) {
        if(mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
            peaks.push(i);
    }
    
    return peaks;
};
