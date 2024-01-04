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

var lengthOfLongestSubstringMapSolution = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};