function solution(numbers) {
  numbers.sort((a, b) => {
    const compareA = parseInt(a.toString() + b.toString());
    const compareB = parseInt(b.toString() + a.toString());
    return compareB - compareA;
  });

  if (numbers.join('')[0] === '0') return '0'; // 0000인 경우 뺴기

  return numbers.join('');
}
