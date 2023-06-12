function solution(a, b) {
    const AB = Number(String(a) + String(b));
    const BA = Number(String(b) + String(a));
    return AB >= BA ? AB : BA;
}