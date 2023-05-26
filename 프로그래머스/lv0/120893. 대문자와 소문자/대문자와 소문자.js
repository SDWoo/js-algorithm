function solution(my_string) {
    return my_string.split('').map((str) => {
        return str.toUpperCase() === str ?  str.toLowerCase() : str.toUpperCase()
    }).join('')
}