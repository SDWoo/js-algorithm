function solution(a, b) {
    const AB = Number(String(a) + String(b));
    const two = 2 * a * b;
    
    return AB >= two ? AB : two;
}