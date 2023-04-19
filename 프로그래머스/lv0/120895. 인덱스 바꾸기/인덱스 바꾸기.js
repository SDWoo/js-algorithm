function solution(my_string, num1, num2) {
    return my_string.split('').map((num,index) => {
        if(index === num1) return my_string[num2];
        if(index === num2) return my_string[num1];
        return num;
    }).join('');
}