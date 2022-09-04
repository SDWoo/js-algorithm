function solution(n, m) {
  const gcb = (a, b) => {
    if (b === 0) return a;
    return gcb(b, a % b);
  };
  const lcm = (a, b) => (a * b) / gcb(a, b);
  return [gcb(n, m), lcm(n, m)];
}
