const solution = (cards) => {
  const answer = [];
  cards.forEach((card, index) => {
    let number= index;
    let count = 0;
    while (true) {
      if (cards[number]) {
        const temp = cards[number];
        cards[number] = 0;
        number = temp - 1;
        count++;
      } else {
        answer.push(count);
        break;
      }
    }
  });
  const sortAnswer = answer.filter((v) => v != 0).sort((a, b) => b - a);

  return sortAnswer.length > 1 ? sortAnswer[0] * sortAnswer[1] : 0;
};