// 내 풀이
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr = arr1[i];
    answer.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

// 좀 더 쉬운 풀이
// 이해 잘 안됨 ㅋㅋ 사실 그냥 좀 봐야겟음
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
