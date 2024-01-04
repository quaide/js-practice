function staircase(n) {
    let space = " "
    let hashtag = "#"
    
    for(let i = 1; i <= n; i++) {
        space.repeat(n - i)
        hashtag.repeat(i)
        console.log(space + hashtag)
    }

}
staircase(1)