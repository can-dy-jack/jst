import { Fibonacci, LoopFibonacci, TailFibonacci } from "./Fibonacci"; 

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
export default function JST() {}

JST.prototype = {
    init, select, style, attr
    ,Fibonacci, LoopFibonacci, TailFibonacci
}
