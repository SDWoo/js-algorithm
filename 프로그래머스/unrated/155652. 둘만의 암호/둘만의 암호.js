function solution(s, skip, index) {
    let answer = '';
    const Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z'];
    skip = skip.split('');
    const filteredAlphabet = Alphabet.filter((alpha) => !skip.includes(alpha));
    
    s.split('').forEach((alpha) => {
        let i = filteredAlphabet.indexOf(alpha) + index;
        const length = filteredAlphabet.length;
        let overLengthIndex = i >= length ? i - Math.floor(i/length) * length : 0;
        answer += i >= length ? filteredAlphabet[overLengthIndex] : filteredAlphabet[i];
    })
    return answer;
}