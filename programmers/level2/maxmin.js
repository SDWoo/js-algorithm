function solution(s) {
  const arr = s.split(' ').map((num) => +num);
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  return min + ' ' + max;
}
