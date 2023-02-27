function solution(msg) {
    const answer = [];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let length = alphabet.length+1;
    const dic = alphabet.reduce((acc, cur, i) => (acc[cur] = i + 1, acc), {})
    
    const s = msg.split("").reduce((acc, cur) => {
       let currentWord = acc + cur;
       if (!dic[currentWord]) {
           dic[currentWord] = length++;
       } else {
           return acc + cur;
       }
       dic[acc] && answer.push(dic[acc]);
       return cur;
   });
       
   answer.push(dic[s]);
    
   return answer;
}