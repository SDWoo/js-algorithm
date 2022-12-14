function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array.from({length: bridge_length}, () => 0);
    let bridge_sum = 0;
    let firstTruck = truck_weights.shift();
    answer++;
    bridge.shift();
    bridge_sum += firstTruck;
    bridge.push(firstTruck);
    
    while (bridge_sum > 0) {
        answer++;
        bridge_sum -= bridge.shift();
        
        if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
          // 다음 트럭을 다리 배열에 넣는다.
          bridge_sum += truck_weights[0];
          bridge.push(truck_weights.shift());
        } else {
          bridge.push(0);
      }
  }
  
  return answer;
}