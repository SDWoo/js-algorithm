function solution(my_string, overwrite_string, s) {
    return my_string.substr(0,s) + overwrite_string + `${s + overwrite_string.length >= my_string.length ? '' : my_string.substr(s + overwrite_string.length, my_string.length +1)}`;
}