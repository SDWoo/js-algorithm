function solution(n) {
  let biggerN = n + 1;
  while (true) {
    if (lengthOfOne(n) !== lengthOfOne(biggerN)) {
      biggerN++;
      continue;
    }
    return biggerN;
  }
}

const lengthOfOne = (num) => {
  return num
    .toString(2)
    .split('')
    .filter((bit) => bit === '1').length;
};

//  더 좋은 접근 => 정규식과 재귀함수
function nextBigNumber(n) {
  var size = n.toString(2).match(/1/g).length;
  while (n++) {
    if (size === n.toString(2).match(/1/g).length) return n;
  }
}
