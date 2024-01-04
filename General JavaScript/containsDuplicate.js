var containsDuplicate = function(nums) {
    nums.sort()
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            return true
        }
    }
    return false
};

//we are creating a set, passing the iterable nums as a paramater to the constructor
//returning equality of size of set and length of iterable. If they are a different size, that means there are duplicates as sets are unique
var containsDuplicateSet = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
}

//we are creating an object
//iterate through nums array
//assian aNum be the value of nums at current iterable index
//if aNum is in the object (bracket notation object accessesor), return true because there are duplicates
//if not, place aNum in the object and continue loop
function objectSolution(nums) {
    let testObj = {};
    for(var i = 0; i < nums.length; i++) {
        let aNum = nums[i];
        if(testObj[aNum]) {
            return true;
        }
        else {
            testObj[aNum] = true;
        }
    }
    return false
}