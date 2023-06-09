function solution(my_string) {
    if(!my_string.match(/\d+/g)) return 0;
    return my_string.match(/\d+/g)?.map(item => Number(item)).reduce((acc, v) => {return acc + v});
}