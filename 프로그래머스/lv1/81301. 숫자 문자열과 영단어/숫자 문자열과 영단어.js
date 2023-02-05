function solution(s) {
    const NumToAlphabet = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    NumToAlphabet.forEach((alp) => {
        s = s.replace(new RegExp(alp,"g"),NumToAlphabet.indexOf(alp));
    })
    
    return parseInt(s);
}