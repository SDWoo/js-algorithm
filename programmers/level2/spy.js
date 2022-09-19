function solution(clothes) {
  const answer = new Map();
  let combine = 1;

  for (let i = 0; i < clothes.length; i++) {
    answer.set(clothes[i][1], (answer.get(clothes[i][1]) || 0) + 1);
  }

  for (let [k, v] of answer) {
    combine = combine * (v + 1);
  }

  return combine - 1;
}
