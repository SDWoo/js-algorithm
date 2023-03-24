function solution(price) {
    function getSalePrice(percent, price) {
        return Math.floor(price - price * (percent/100));
    }
    switch(true) {
        case (price >= 500000): 
            return getSalePrice(20, price)
        case (price >= 300000):
            return getSalePrice(10, price)
        case (price >= 100000):
            return getSalePrice(5, price)
        default: 
            return price
    }
    
    return price
    
}