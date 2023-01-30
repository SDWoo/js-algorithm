function solution(n)
{
    return n.toString()
        .split('')
        .map(value=>parseInt(value))
        .reduce((acc, cur) => acc += cur);
}