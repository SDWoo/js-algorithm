function solution(n) {
  const fib = [];
  const NUM = 1234567;
  for (let i = 0; i < n + 1; i++) {
    if (i < 2) {
      fib.push(i);
      continue;
    }
    fib.push((fib[i - 1] % NUM) + (fib[i - 2] % NUM));
  }

  return fib[n] % NUM;
}
