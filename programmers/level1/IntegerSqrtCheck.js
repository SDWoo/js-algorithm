function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? (sqrt + 1) ** 2 : -1;
}
