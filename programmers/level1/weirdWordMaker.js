function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((val, idx) => {
          return idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
