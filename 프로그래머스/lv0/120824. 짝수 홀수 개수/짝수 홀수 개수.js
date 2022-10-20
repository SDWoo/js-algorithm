function solution(num_list) {
    let array = [0,0];
    num_list.forEach((num) => {
        num%2===0 ? array[0]+=1 : array[1]+=1;
    })
    
    return array;
}