function solution(strings, n) {
    return strings.sort((a,b) => {
        console.log(a[n], b[n])
        return a[n] === b[n] ? 
                (a > b ? 1 : -1) :
                (a[n] > b[n] ? 1 : -1)
    })
}