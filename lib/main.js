'use strict';

function Fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return Fibonacci(n-2) + Fibonacci(n-1);
}
function TailFibonacci(n, pre = 0, cur = 1) {
    // 严格模式才行
	if(n === 0) return n;
    if(n === 1) return cur;
    return TailFibonacci(n-1, cur, pre + cur);
}
function LoopFibonacci(n) {
    if(n === 0 || n === 1) return n;
    let pre = 0,cur = 1;
    for(let i = 0; i<n - 1;i++) {
        let next = pre + cur;
        pre = cur;
        cur = next;
    }
    return cur;
}

function len(arr) {
    return arr.length;
}
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
function head(arr) {
    return arr[0];
}
function tail(arr) {
    return arr.slice(1);
}

function init(left = "start JST!", right = "JavaScript Select Tool"){
    console.log(
        `%c${left}%c${right}`, 
        "color: white;background-color: #555;padding: 2px 5px;border-radius: 3px 0 0 3px;", 
        "color: white;background-color: green;padding: 2px 5px;border-radius: 0 3px 3px 0;"
    );
}
function select(str) {
    this.node = document.querySelector(str);
    return this;
}
function style(attr, val) {
    this.node.style[attr] = val;
    return this;
}
function attr(attr, val) {
    if(attr === 'class') {
        this.node.classList.add(val);
    } else {
        this.node[attr] = val;
    }
    return this;
}
function JST() {}

JST.prototype = {
    init, select, style, attr
    ,Fibonacci, LoopFibonacci, TailFibonacci,
    len, concat, head, tail
};

var jst = new JST();
jst.init();
