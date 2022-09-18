// h인덱스를 하나씩 올리면서 위에서부터 내려온다.
// 그러면 h인덱스 수만큼 하나씩 내려갈 것임
// => h인덱스 <= h인덱스보다 큰 citations 개수
function solution(citations) {
  let h = 0;
  citations.sort((a, b) => b - a);
  while (h + 1 <= citations[h]) {
    h++;
  }
  return h;
}

function soluntion2(citations) {
  return citations.sort((a, b) => b - a).filter((v, i) => v >= i + 1).length;
}
