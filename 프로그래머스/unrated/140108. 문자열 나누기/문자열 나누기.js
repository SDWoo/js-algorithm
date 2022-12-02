function solution(s) {
    let answer = 0;
    const map = new Map();
    if(s.length === 1) return 1;
    let first = s[0];
    let firstNum = 0;
    let otherNum = 0;
    s.split('').forEach((char,index) => {
        if(char === first) {
            firstNum += 1;
        }else {
            otherNum += 1;
        }
        
        if (firstNum === otherNum) {
            first = index === s.lengt - 1? '' : s[index+1];
            firstNum = 0;
            otherNum = 0;
            answer += 1;
        }
        
//         const plusnum = map.get(char) ? map.get(char) + 1 : 1;
//         const array = [...map.values()];
                
//         if(index > 0 && array.indexOf(plusnum) > -1){
//             [...map.keys()].forEach((key) => {
//                 map.delete(key)
//             })
//             answer += 1;
//         }
//         else {
//             map.set(char, plusnum);
//         }
        
    })
    
    if(firstNum > 0 || otherNum > 0) {
        answer += 1;
    }
    return answer;
}