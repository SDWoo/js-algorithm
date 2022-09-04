function solution(num) {
  let roop = 0;
  let n = num;

  while (roop < 500) {
    if (n === 1) {
      return roop;
    }
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    roop++;
  }
  return -1;
}
