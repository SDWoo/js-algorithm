function solution(people, limit) {
  let answer = 0;
  let first = 0;
  let last = people.length - 1;
  people.sort((a, b) => a - b);
  while (first < last) {
    if (people[first] + people[last] > limit) {
      last--;
    } else {
      last--;
      first++;
    }
    answer++;
  }
  if (first === last) answer++;
  return answer;
}
