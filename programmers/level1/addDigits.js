function solution(n) {
  if (n.toString().length === 1) return n;

  const answer = n
    .toString()
    .split('')
    .map((val) => Number(val))
    .reduce((acc, cur) => {
      return (acc += cur);
    });

  return answer;
}
