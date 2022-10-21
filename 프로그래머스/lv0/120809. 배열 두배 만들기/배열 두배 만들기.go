
func solution(numbers []int) []int {
    
    result := make([]int,0,len(numbers))
    
    
    for _,v := range numbers{
        result = append(result,v*2)
    }
    return result
}