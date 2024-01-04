var lastStoneWeight = function(stones) {
    stones.sort()
    let end = stones.length - 1
    let newEnd = stones[end] - stones[end - 1]
    if(stones.length < 1) {
        return 0
    }
    if(stones.length < 2) {
        return stones[0]
    }
    stones[end-1] = newEnd
    lastStoneWeight(stones.splice(end))
};

var lastStoneWeight = function(stones) {
    if(stones.length < 2) return stones;
    stones.sort((a,b) => a-b);
    let a = stones.pop();
    let b = stones.pop();
    stones.push(Math.abs(a-b));
    return lastStoneWeight(stones);
};