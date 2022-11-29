function solution(skill, skill_trees) {

  order = skill;
  tree  = skill_trees;

  // tree에서 order에 해당하는 값만 남겨두기
  // *** 문제에서 중복 값이 없다고 하여 중복값 제거 코드는 없음
  for(let t=0; t<tree.length; t++){ // tree
    let temp = [];
    for(let s=0; s<tree[t].length; s++){ // singles
      let isOrder = order.includes(tree[t][s]);
      if(isOrder){
        temp.push(tree[t][s])
      }
    }
    tree[t]=temp.join('');
  }


  // 순서 배열 생성하기
  let arr = [];
  for(let t=0; t<tree.length; t++){
    let temp = [];
    for(let s=0; s<tree[t].length; s++){
      temp.push(order.indexOf(tree[t][s]));
    }
    arr.push(temp)
  }

  // [ [ 1, 0, 2 ], [ 0, 1, 2 ], [ 0, 1 ], [ 1, 2 ] ]
  // 만들어진 순서 배열이 0부터 순차적인 값을 지니고 있어야 true
  let isRightOrder = new Array(arr.length).fill(true)
  for(let i=0; i<arr.length; i++){
    let k = 0;
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]!==k){
        isRightOrder[i]=false;
        continue;
      }
      k++;
    }
  }
  const answer = isRightOrder.filter(bool => bool==true).length
  return answer;
}