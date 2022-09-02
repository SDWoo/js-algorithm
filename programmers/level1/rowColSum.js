function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(
      row.map((col, colIndex) => {
        return col + arr2[rowIndex][colIndex];
      })
    );
  });
  return answer;
}
