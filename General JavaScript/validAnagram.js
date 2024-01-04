var isAnagram = function(s, t) {
    const ns = s.split('').sort().toString()
    const nt = t.split('').sort().toString()
    return ns===nt
};