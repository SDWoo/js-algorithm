function solution(emergency) {
    const number = [...emergency].sort((a,b) => b-a);
    
    return emergency.map((num) => {
        return number.indexOf(num) + 1;
    })
}