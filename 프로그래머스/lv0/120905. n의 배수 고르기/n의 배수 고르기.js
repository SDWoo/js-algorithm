function solution(n, numlist) {
    return numlist.reduce((acc, cur)=> {if(cur % n === 0) acc.push(cur); return acc} , [])
}