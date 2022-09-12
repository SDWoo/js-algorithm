// 통과를 못함 => 이유는 ? 테스트케이스에서 어떤것이 실퍃나느지 잘 모르겟음
// 고민해보고 이건 좀 고쳐봐야겟다.
function solution(n, words) {
  let round = 1;
  let last = words[0].substr(-1);
  let answer = [0, 0];

  words.forEach((word, i) => {
    if (i === 0) return;
    let pass =
      word.substring(0, 1) === last && !words.slice(0, i).includes(word);
    if (i % n === 0) round++;
    if (!pass) {
      const order = (i + 1) % n === 0 ? n : (i + 1) % n;
      answer = [order, round];
    }
    last = word.substr(-1);
  });

  return answer;
}

// 잘 푼 풀이
function solution(n, words) {
  var answer = [];
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    let pass =
      words[i][0] === words[i - 1][words[i - 1].length - 1] &&
      !words.slice(0, i).includes(words[i]);
    if (i % n === 0) turn++;
    if (!pass) return [(i % n) + 1, turn];
  }
  return [0, 0];
}
