/**
 * 
 * @param {string[]} strs
 * @return {string[][]} 
 */

var groupAnagrams = function(strs) {
    let obj = {}

    for(let i of strs) {
        let key = i.split('').sort().join('')

        if(ojb[key]) {
            obj[key].push(i)            
        }
        else {
            obj[key] = [i]
        }
    }
    return(Object.values(obj))
    
};