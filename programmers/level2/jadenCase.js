function solution(s) {
  return s
    .split(' ')
    .map((string) =>
      string.toLowerCase().replace(/^[a-z]/, (char) => char.toUpperCase())
    )
    .join(' ');
}
