/**
 * 
 * @param {string} s 
 * @param {string} t
 * @return {boolean} 
 */
var isAnagram = function(s, t) {
    const stringOne = s.split('').sort().toString();
    const stringTwo = t.split('').sort().toString();
    return stringOne === stringTwo;
}