// var compose = function(functions) {
//     return function(x) {
//         for (const fn of functions.reverse()) {
//             x = fn(x)
//         }
//         return x
//     }
// };

var compose = function(functions) {
    const fn = (accumulator, f) => f(accumulator);
    return function(x) {
        return functions.reduceRight(fn, x)
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))

const nums = [2, 7, 11, 15]

const answer = [nums.length]

console.log(answer.length)