export function Fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return Fibonacci(n-2) + Fibonacci(n-1);
}
export function TailFibonacci(n, pre = 0, cur = 1) {
    // 严格模式才行
	if(n === 0) return n;
    if(n === 1) return cur;
    return TailFibonacci(n-1, cur, pre + cur);
}
export function LoopFibonacci(n) {
    if(n === 0 || n === 1) return n;
    let pre = 0,cur = 1;
    for(let i = 0; i<n - 1;i++) {
        let next = pre + cur;
        pre = cur;
        cur = next;
    }
    return cur;
}