function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let bridge = Array.from({length: bridge_length-1}, () => 0);
    let bridge_sum = 0;
    let firstTruck = truck_weights.shift();
    bridge.push(firstTruck);
    bridge_sum += firstTruck;
    
    
    while (bridge_sum > 0) {
        answer++;
        bridge_sum -= bridge.shift();
        
        if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
          bridge_sum += truck_weights[0];
          bridge.push(truck_weights.shift());
        } else {
          bridge.push(0);
      }
  }
  
  return answer;
}