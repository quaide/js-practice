//function that returns an object with three functions
var createCounter = function(init) {
    let count = init

    function increment() {
        return ++count
    }

    function decrement() {
        return --count
    }

    function reset() {
        count = init
        return count
    }    

    return {
        increment,
        decrement,
        reset
    }
};
console.log("solution with factory function")
const counter1 = createCounter(5)
console.log(counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4

//function that returns an object with 3 arrow functions
var createCounter = function(init) {
    let count = init

    const increment = () => {
        return ++count
    }

    const decrement = () => {
        return --count
    }

    const reset = () => {
        count = init
        return count
    }    

    return {
        increment,
        decrement,
        reset
    }
};
console.log("solution with arrow functions")
const counter3 = createCounter(5)
console.log(counter3.increment()); // 6
console.log(counter3.reset()); // 5
console.log(counter3.decrement()); // 4

//class with same three member functions
class Counter{
    constructor(init) {
        this.init = init
        this.count = init
    }
    increment() {
        return ++this.count
    }
    decrement() {
        return --this.count
    }
    reset() {
        this.count = this.init
        return this.count
    }
}
console.log("solution with classes")
const counter2 = new Counter(5)
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4