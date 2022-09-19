function solution(numbers, target) {
  let answer = 0;

  const bfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    bfs(index + 1, sum + numbers[index]);
    bfs(index + 1, sum - numbers[index]);
  };
  bfs(0, 0);

  return answer;
}
