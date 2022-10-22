function solution(denum1, num1, denum2, num2) {
    const gcb = (target1, target2) => {
        if(target2 === 0) return target1;
        return gcb(target2, target1%target2);
    }
    
    let lcm = (num1 * num2) / gcb(num1, num2);
    let denum = (denum1 * lcm/num1) + (denum2 * lcm/num2);
    let divNum = gcb(denum, lcm);
    
    return [denum/divNum, lcm/divNum];
}