/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const stonesQueue = new MaxPriorityQueue();

    let length = stones.length;

    for(let i = 0; i < length; i++) {
        stonesQueue.enqueue(stones[i]);
    }

    while(stonesQueue.size() > 1) {
        let y = stonesQueue.dequeue().element;
        let x = stonesQueue.dequeue().element;

        if(y !== x) {
            y = y - x;
            stonesQueue.enqueue(y);
        } else {
            stonesQueue.enqueue(0);
        }
    }

    return stonesQueue.dequeue().element;
};
