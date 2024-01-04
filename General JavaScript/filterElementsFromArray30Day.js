/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray
    
};

/**
var filter = function(arr, fn) {
    //declarative programming, implicit:
    return arr.filter(fn);

    //imperative programming:
    const res = []
    
    //use the key word in during a for loop to grab the index
    for(const i in arr) {
        if(fn(arr[i], Number(i))) {
            res.push(arr[i])
        }
    }

    //use the key word of during a for loop to grab the value
    for(const n of arr) {
        if(fn(n, i)){

        }
    }
};
*/