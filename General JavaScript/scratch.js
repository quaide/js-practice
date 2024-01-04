//randomly found problem I wanted to solve

//my approach is slow, runtime of O(n^2)

// const target = 9
//const nums = [2, 7, 11, 15]
// let ans = []

// for(let i = 0; i < nums.length; i++) {
//     for(let j = 0; j < nums.length; j++){
//         if(nums[i] + nums[j] === target && !ans.length) {
//             ans.push(nums[i])
//             ans.push(nums[j])
//         }
//     }
// }

//console.log("the numbers in the array that sum to target are: " + ans[0] + " and " + ans[1])

//--------------------------------------------------------------------

// var compose = function(functions) {
// 	return function(x) {

//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//         } 

//         return x
//     };
// };


// const fn = compose([x => x + 1, x => 2 * x])
//console.log(fn(4)) // 9

//--------------------------------------------------------------------
// nums = [10,4,8,3]

// let leftRigthDifference = function(nums) {
//     let leftSum = 0;
//     let rightSum = nums.reduce((sum,curr)=>sum += curr,0);

//     return nums.map((curr)=>{
//         //leftSum - (rightSum - curr)
//         rightSum -= curr;
//         let res = Math.abs(leftSum - rightSum );
//         leftSum += curr;
//         return res
//     });
// };

//--------------------------------------------------------------------

// const rockets = [
//     { country:'Russia', launches:32 },
//     { country:'US', launches:23 },
//     { country:'China', launches:16 },
//     { country:'Europe(ESA)', launches:7 },
//     { country:'India', launches:4 },
//     { country:'Japan', launches:3 }
// ];

// const updatedRockets = rockets.map(current => ({
//     country: current.country, launches: current.launches + 10
// }))

// console.log(rockets)
// console.log(updatedRockets)

//--------------------------------------------------------------------

var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 1
    let longestSub = 1
    let set = new Set()
    if(!s) {
        longestSub = 0
    }
    while(right < s.length) {                
        set.add(s[left])
        if(!set.has(s[right])){
            set.add(s[right])
            right += 1
        }
        else if(set.has(s[right])) {
            set.clear()
            left +=1
            right = left + 1
        }
        if(set.size > longestSub) {
            longestSub = set.size
        }

        
    }    
    return longestSub
};