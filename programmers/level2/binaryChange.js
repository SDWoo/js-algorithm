function solution(s) {
  let zeroCount = 0;
  let length = 0;
  let binaryCount = 0;

  while (s !== '1') {
    s = s
      .split('')
      .filter((num) => {
        if (num === '0') zeroCount++;
        return num === '1';
      })
      .join('');

    length = s.length;
    s = s.length.toString(2);
    binaryCount++;
    continue;
  }

  return [binaryCount, zeroCount];
}
