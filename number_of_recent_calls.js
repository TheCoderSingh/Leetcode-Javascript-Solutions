
var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    for(let i = 0; i < this.requests.length; i++) {
        if(this.requests[i] < (t - 3000)) {
            this.requests.splice(i, 1);
            i--;
        }
            
    }
    
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
