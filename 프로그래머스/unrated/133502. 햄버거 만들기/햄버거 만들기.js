function solution(ingredient) {
    let result = 0;
    const TARGET_ORDER = '1231'
    const stack = [0];
    let i = 0;
    // 순서대로 한번 돌았을 때, 1,2,3,1 이 있다면? 그거 빼고 한다. 없다면 끝.
    
    while(i<ingredient.length-3) {
        if(ingredient[i] === 1 && ingredient[i+1] === 2 &&
           ingredient[i+2] === 3 && ingredient[i+3] === 1) {
                result += 1;
                ingredient.splice(i,4);
                i= stack.pop();
        }else if (ingredient[i] === 1) {
            stack.push(i);
            i++;
        }
        else {
            i++;
        }
    }
    
    return result;
}