//n^2 time complexity
var twoSum = function(nums, target) {
    const ans = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                ans.push(i, j)
                return ans 
            }
        }
    }     
};

var twoSumMap1 = function(nums, target) {
    const map = new Map(nums);
    const ans = []
    for(key in map) {
        if(map.get(key) + map.get(key + 1) === target) {
            ans.push(key, key + 1) 
        }
    }
    return ans       
};

var twoSumMap2 = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};
