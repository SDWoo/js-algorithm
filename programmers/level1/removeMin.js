function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  const answer = [...arr];
  const minNum = arr.sort((a, b) => a - b)[0];
  return answer.filter((v) => v !== arr[arr.indexOf(minNum)]);
}
