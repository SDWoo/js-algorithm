function solution(p) {
    let open = 0;
    let close = 0;
    // 1
    if(p.length === 0) return '';
    
    for(let i = 0; i < p.length; i+= 1) {
        p[i] === '(' ? open += 1 : close += 1;
        
        // u가 균형잡힌 문자열인지 판별
        if(open === close) {
            // u 로 나눈 것이 올바른 괄호 문자열인지 판별
            if(check(p.slice(0, i+1))) {
                return p.slice(0,i+1) + solution(p.slice(i+1));
            }
            // 아닌 경우
            else {
                let str = '(' + solution(p.slice(i+1)) + ')';
                for(let j = 1; j<i; j+=1) {
                    str = p[j] === '(' ? 
                        str + ')' :
                        str + '('
                }
                return str;
            }
        }
    }
}

function check(array) {
    const stack = [];
    for(let i = 0; i< array.length; i+=1) {
        if(array[i] === '(') stack.push(array[i])
        else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return true;
}