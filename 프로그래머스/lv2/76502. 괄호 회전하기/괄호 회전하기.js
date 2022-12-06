function solution(s) {
    let result = 0;
    for(let i = 0; i<s.length; i+= 1) {
        const array = [...s];
        for(let j = 0; j < i ; j+= 1) {
            let cover = array.shift();
            array.push(cover);
        }
        result = is_pair(array.join('')) ? result + 1 : result
    }
    return result;
}

function is_pair(s){
  //결과 초기값 true
  let result = true;
  //괄호만 넣을 빈 배열 생성
  let s_arr =[];
  let map = {
    '(':')',
    '[':']',
    '{':'}'
  }
  for (var i=0; i<s.length; i++){
    if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
      s_arr.push(s[i]);
    }
    else if(s[i]===")" || s[i]==="]" || s[i]==="}") {
      var s_key = s_arr.pop();
      if(s[i]!==map[s_key]){
        return false;
      }
    }
  }
  if(s_arr.length!==0){
    result = false;
  }
  return result;
}