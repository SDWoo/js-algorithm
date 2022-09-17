function solution(answers) {
  let answer = [1, 2, 3];
  const ways = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let max = 0;

  const getCorrect = (arr) =>
    answers.filter((v, i) => v === arr[i % arr.length]).length;
  ways.forEach((way, i) => (max = Math.max(getCorrect(way), max)));
  return answer.filter((v) => getCorrect(ways[v - 1]) === max);
}
