var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    num = n.toString()
    for(digit of num) {
        product = product* Number(digit)
        sum = sum + Number(digit)
    }    
    return product - sum
};

var minimumSum = function(num) {
    let digits = num.toString()
    for(x of digits) {
        console.log(x) 
        
    }
};

minimumSum(123)